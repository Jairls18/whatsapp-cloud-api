export enum PubSubEvents {
  message = 'message',
  text = 'text',
  image = 'image',
  document = 'document',
  audio = 'audio',
  video = 'video',
  sticker = 'sticker',
  location = 'location',
  contacts = 'contacts',
  button_reply = 'button_reply',
  list_reply = 'list_reply',
  button = "button"
}

export type PubSubEvent = keyof typeof PubSubEvents;
