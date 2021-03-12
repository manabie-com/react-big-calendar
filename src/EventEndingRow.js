import PropTypes from 'prop-types'
import React from 'react'
import EventRowMixin from './EventRowMixin'
import { eventLevels } from './utils/eventLevels'
import range from 'lodash/range'
import ShowMoreButton from './ShowMoreButton'
import EventCell from './EventCell'

let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot
let eventsInSlot = (segments, slot) =>
  segments.filter(seg => isSegmentInSlot(seg, slot)).length

class EventEndingRow extends React.Component {
  render() {
    let {
      segments,
      slotMetrics: { slots },
    } = this.props
    let rowSegments = eventLevels(segments).levels[0]

    let current = 1,
      lastEnd = 1,
      row = []

    while (current <= slots) {
      let key = '_lvl_' + current

      let { event, left, right, span } =
        rowSegments.filter(seg => isSegmentInSlot(seg, current))[0] || {} //eslint-disable-line

      if (!event) {
        current++
        continue
      }

      let gap = Math.max(0, left - lastEnd)

      if (this.canRenderSlotEvent(left, span)) {
        let content = EventRowMixin.renderEvent(this.props, event)

        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
        }

        row.push(EventRowMixin.renderSpan(slots, span, key, content))

        lastEnd = current = right + 1
      } else {
        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'))
        }

        row.push(
          EventRowMixin.renderSpan(
            slots,
            1,
            key,
            this.renderShowMore(segments, current)
          )
        )
        lastEnd = current = current + 1
      }
    }

    return <div className="rbc-row">{row}</div>
  }

  canRenderSlotEvent(slot, span) {
    let { segments } = this.props

    return range(slot, slot + span).every(s => {
      let count = eventsInSlot(segments, s)

      return count === 1
    })
  }

  renderShowMore(segments, slot) {
    let {
      localizer,
      components,
      getEvents,
      getters,
      accessors,
      onSelect,
      onDoubleClick,
      onKeyPress,
    } = this.props
    let count = eventsInSlot(segments, slot)
    const key = 'sm_' + slot
    const onClick = e => this.showMore(slot, e)
    const events = getEvents(slot)
    const label = localizer.messages.showMore(count)
    const ShowMore = components.showMoreButton || ShowMoreButton
    return count ? (
      <ShowMore
        key={key}
        onClick={onClick}
        events={events}
        label={label}
        extraEventsCount={count}
      >
        {events.map((event, index) => (
          <EventCell
            key={index}
            type="popup"
            event={event}
            getters={getters}
            onSelect={onSelect}
            accessors={accessors}
            components={components}
            onDoubleClick={onDoubleClick}
            onKeyPress={onKeyPress}
            draggable={true}
          />
        ))}
      </ShowMore>
    ) : (
      false
    )
  }

  showMore(slot, e) {
    e.preventDefault()
    this.props.onShowMore(slot, e.target)
  }
}

EventEndingRow.propTypes = {
  segments: PropTypes.array,
  slots: PropTypes.number,
  onShowMore: PropTypes.func,
  ...EventRowMixin.propTypes,
}

EventEndingRow.defaultProps = {
  ...EventRowMixin.defaultProps,
}

export default EventEndingRow
