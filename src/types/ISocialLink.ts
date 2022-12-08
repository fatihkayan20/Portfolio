import { SocialLinkType } from "./SocialLinkType";

export interface ISocialLink {
  readonly id: number;
  readonly type: SocialLinkType;
  readonly url: string;
}
