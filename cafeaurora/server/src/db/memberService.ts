// apps/server/src/db/memberService.ts
import { MemberProfile } from "@cafe-aurora/types";

export abstract class MemberService {
  abstract initialized: boolean;
  abstract init(): Promise<void>;
  abstract validate(
    username: string,
    password: string,
  ): Promise<MemberProfile | null>;
}
