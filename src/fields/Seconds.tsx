import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { UNITS } from '../constants'
import { DEFAULT_LOCALE_EN } from '../locale'
import { SecondsProps } from '../types'
import { classNames } from '../utils'

export default function Seconds(props: SecondsProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    periodicityOnDoubleClick,
    mode,
  } = props
  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-minutes': true,
        [`${className}-field`]: !!className,
        [`${className}-minutes`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {period === 'second'
        ? locale.prefixSecondsForHourPeriod !== '' && (
            <span>
              {locale.prefixSecondsForHourPeriod ||
                DEFAULT_LOCALE_EN.prefixSecondsForHourPeriod}
            </span>
          )
        : locale.prefixSeconds !== '' && (
            <span>
              {locale.prefixSeconds || DEFAULT_LOCALE_EN.prefixSeconds}
            </span>
          )}

      <CustomSelect
        placeholder={
          period === 'second'
            ? locale.emptySecondsForHourPeriod ||
              DEFAULT_LOCALE_EN.emptySecondsForHourPeriod
            : locale.emptySeconds || DEFAULT_LOCALE_EN.emptySeconds
        }
        value={value}
        unit={UNITS[0]}
        setValue={setValue}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        leadingZero={leadingZero}
        clockFormat={clockFormat}
        period={period}
        periodicityOnDoubleClick={periodicityOnDoubleClick}
        mode={mode}
      />

      {period === 'minute' && locale.suffixSecondsForHourPeriod !== '' && (
        <span>
          {locale.suffixSecondsForHourPeriod ||
            DEFAULT_LOCALE_EN.suffixSecondsForHourPeriod}
        </span>
      )}
    </div>
  )
}
