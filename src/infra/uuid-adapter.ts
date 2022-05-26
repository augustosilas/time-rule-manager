import { UuidGenerate } from "../data/protocols/uuid-generate";
import { randomUUID } from "crypto";

export class UuidAdapter implements UuidGenerate {
  generate(): string {
    return randomUUID();
  }
}
