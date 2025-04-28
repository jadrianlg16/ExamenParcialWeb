// apps/server/src/db/factory.ts
import { MemberService } from "./memberService";
import { FakeMemberService } from "./fake/memberService";


export function createMemberService(kind = "fake"): MemberService {
  switch (kind.toLowerCase()) {
    case "fake":
      return new FakeMemberService();
    // case "mongo": return new MongoMemberService();
    default:
      throw new Error(`Unknown MemberService kind: ${kind}`);
  }
}
