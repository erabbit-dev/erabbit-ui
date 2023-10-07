const config = {
  name: 'erabbit-icon',
  basic: [
    'angle-left',
    'angle-right',
    'arrow-down',
    'arrow-up',
    'back-top',
    'cart',
    'clock',
    'close',
    'comment',
    'customer',
    'lamp',
    'location',
    'lock',
    'marker',
    'phone',
    'question',
    'remove',
    'search',
    'weibo',
    'weixin',
    'wind',
    'yuan',
    'zan',
  ] as const,
  outlined: [
    'checked-o',
    'heart-o',
    'star-o',
    'safe-o',
    'see-o',
    'warn-o',
  ] as const,
  filled: ['checked', 'heart', 'star', 'safe', 'see', 'warn'] as const,
}

export type IconName =
  | (typeof config.filled)[number]
  | (typeof config.outlined)[number]
  | (typeof config.basic)[number]

export default config
