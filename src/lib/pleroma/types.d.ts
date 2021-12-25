export interface Account {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  locked: boolean;
  bot: boolean;
  created_at: string;
  note: string;
  url: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  last_status_at: string;
  emojis: Emoji[];
  fields: Field[];
}

export interface Activity {
  week: string;
  statuses: string;
  logins: string;
  registrations: string;
}

export interface Announcement {
  id: string;
  text: string;
  published: boolean;
  all_day: boolean;
  created_at: string;
  updated_at: string;
  read: boolean;
  scheduled_at?: string;
  starts_at?: string;
  ends_at?: string;
  reactions: AnnouncementReaction[];
}

export interface AnnouncementReaction {
  name: string;
  count: number;
  me: boolean;
  url?: string;
  static_url?: string;
}

export interface Application {
  name: string;
  website?: string;
  vapid_key?: string;
}

export enum AttachmentType {
  Unknown = 'unknown',
  Image = 'image',
  Gifv = 'gifv',
  Video = 'video',
  Audio = 'audio'
}

export interface AttachmentImageMeta {
  width: number;
  height: number;
  size: string;
  aspect: number;
}

export interface AttachmentVideoMeta {
  width: number;
  height: number;
  frame_rate: string;
  duration: number;
  bitrate: number;
}

export interface AttachmentImage {
  id: string;
  type: AttachmentType.Image;
  url: string;
  preview_url: string;
  remote_url?: string;
  description?: string;
  blurhash?: string;
  meta?: {
    original: AttachmentImageMeta;
    small: AttachmentImageMeta;
    focus: {
      x: number;
      y: number;
    };
  };
}

export interface AttachmentGifv {
  id: string;
  type: AttachmentType.Gifv;
  url: string;
  preview_url: string;
  remote_url?: string;
  description?: string;
  blurhash?: string;
  meta?: {
    length: string;
    duration: number;
    fps: number;
    size: string;
    width: number;
    height: number;
    aspect: number;
    original: AttachmentVideoMeta;
    small: AttachmentImageMeta;
  };
}

export interface AttachmentVideo {
  id: string;
  type: AttachmentType.Video;
  url: string;
  preview_url: string;
  remote_url?: string;
  description?: string;
  blurhash?: string;
  meta?: {
    length: string;
    duration: number;
    fps: number;
    size: string;
    width: number;
    height: number;
    aspect: number;
    audio_encode: string;
    audio_bitrate: string;
    audio_channels: string;
    original: AttachmentVideoMeta;
    small: AttachmentImageMeta;
  };
}

export interface AttachmentAudio {
  id: string;
  type: AttachmentType.Audio;
  url: string;
  preview_url: string;
  remote_url?: string;
  description?: string;
  blurhash?: string;
  meta?: {
    length: string;
    duration: number;
    audio_encode: string;
    audio_bitrate: string;
    audio_channels: string;
    original: {
      duration: number;
      bitrate: number;
    };
  };
}

export interface AttachmentUnknown {
  id: string;
  type: AttachmentType.Unknown;
  url: string;
  preview_url: string;
  remote_url?: string;
  description?: string;
  blurhash?: string;
  meta?: object;
}

export type Attachment = AttachmentUnknown | AttachmentImage | AttachmentGifv | AttachmentVideo | AttachmentAudio

export enum CartType {
  Link = 'link',
  Photo = 'photo',
  Video = 'video',
  Rich = 'rich',
}

export interface Card {
  url: string;
  title: string;
  description: string;
  type: CartType;
  author_name: string;
  author_url: string;
  provider_name: string;
  provider_url: string;
  html: string;
  width: number;
  height: number;
  image: string;
  embed_url: string;
  blurhash: string;
}

export interface Context {
  ancestors: Status[];
  descendants: Status[];
}

export interface Conversation {
  id: string;
  accounts: Account[];
  unread: boolean;
  last_status?: Status[];
}

export interface Emoji {
  shortcode: string;
  url: string;
  static_url: string;
  visible_in_picker: boolean;
  category?: string;
}

export interface Error {
  error: string;
  error_description?: string;
}

export interface FeaturedTag {
  id: string;
  name: string;
  url: string;
  statuses_count: number;
  last_status_at: string;
}

export interface Field {
  name: string;
  value: string;
  verified_at?: string;
}

export enum FilterContext {
  Home = 'home',
  Notifications = 'notifications',
  Public = 'public',
  Thread = 'thread',
}

export interface Filter {
  id: string;
  phase: string;
  context: FilterContext[];
  expires_at: string;
  irreversible: boolean;
  whole_word: boolean;
}

export interface History {
  day: string;
  uses: string;
  accounts: string;
}

export interface IdentityProof {
  provider: string;
  provider_username: string;
  profile_url: string;
  proof_url: string;
  updated_at: string;
}

export interface Instance {
  uri: string;
  title: string;
  description: string;
  short_description: string;
  email: string;
  version: string;
  languages: string[];
  registrations: boolean;
  approval_required: boolean;
  invites_enabled: boolean;
  urls: {
    streaming_api: string;
  };
  stats: {
    user_count: number;
    status_count: number;
    domain_count: number;
  };
  thumbnail?: string;
  contact_account?: Account;
}

export enum ListRepliesPolicy {
  Followed = 'followed',
  List = 'list',
  None = 'none',
}

export interface List {
  id: string;
  title: string;
  replies_policy: ListRepliesPolicy;
}

export interface Marker {
  home: MarkerObject;
  notifications: MarkerObject;
}

export interface MarkerObject {
  last_read_id: string;
  updated_at: string;
  version: number;
}

export interface Mention {
  id: string;
  username: string;
  acct: string;
  url: string;
}

export enum NotificationType {
  Follow = 'follow',
  FollowRequest = 'follow_request',
  Mention = 'mention',
  Reblog = 'reblog',
  Favourite = 'favourite',
  Poll = 'poll',
  Status = 'status',
}

export interface Notification {
  id: string;
  type: NotificationType;
  created_at: string;
  account: Account;
  status?: Status;
}

export interface Poll {
  id: string;
  expires_at?: string;
  expired: boolean;
  multiple: boolean;
  votes_count: number;
  voters_count: number;
  voted?: boolean;
  own_votes?: number[];
  options: PollOption[];
  emojis: Emoji[];
}

export interface PollOption {
  title: string;
  votes_count: number;
}

export interface PushSubscription {
  id: string;
  endpoint: string;
  alerts: {
    follow: boolean;
    favourite: boolean;
    reblog: boolean;
    mention: boolean;
    poll: boolean;
  };
  server_key: string;
}

export interface Relationship {
  id: string;
  following: boolean;
  showing_reblogs: boolean;
  notifying: boolean;
  followed_by: boolean;
  blocking: boolean;
  blocked_by: boolean;
  muting: boolean;
  muting_notifications: boolean;
  requested: boolean;
  domain_blocking: boolean;
  endorsed: boolean;
  note: string;
}

export interface Results {
  accounts: Account[];
  statuses: Status[];
  hashtags: Tag[];
}

export interface ScheduledStatus {
  id: string;
  scheduled_at: string;
  params: {
    text: string;
    in_reply_to_id?: string;
    media_ids?: string[];
    sensitive?: boolean;
    spoiler_text?: string;
    visibility: string;
    scheduled_at?: string;
    application_id: string;
  };
  media_attachments: Attachment[];
}

export enum SourcePrivacy {
  Public = 'public',
  Unlisted = 'unlisted',
  Private = 'private',
  Direct = 'direct',
}

export interface Source {
  note: string;
  fields: Field[];
  privacy?: SourcePrivacy;
  sensitive?: boolean;
  language?: string;
  follow_requests_count?: number;
}

export interface Status {
  id: string;
  uri: string;
  create_at: string;
  account: Account;
  content: string;
  visibility: SourcePrivacy;
  sensitive: boolean;
  spoiler_text: string;
  media_attachments: Attachment[];
  application: Application;
  mentions: Mention[];
  tags: Tag[];
  emojis: Emoji[];
  reblogs_count: number;
  favourites_count: number;
  replies_count: number;
  url?: string;
  in_reply_to_id?: string;
  in_reply_to_account_id?: string;
  reblog?: Status;
  poll?: Poll;
  card?: Card;
  language?: string;
  text?: string;
  favourited?: boolean;
  reblogged?: boolean;
  muted?: boolean;
  bookmarked: boolean;
  pinned?: boolean;
}

export interface Tag {
  name: string;
  url: string;
  history?: History[];
}

export interface Token {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
}
