import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

import data from "../utils/predefinedData"

describe("Editor Aggregation Tests", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup({ uid: "linux" }, data)))
  afterEach(async () => await teardown())

  it("should allow reading and deny writing/deleting users aggregation document", async () => {
    const ref = db.doc("aggregations/users")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting members aggregation document", async () => {
    const ref = db.doc("aggregations/members")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting events aggregation document", async () => {
    const ref = db.doc("aggregations/events")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting participations aggregation document", async () => {
    const ref = db.doc("aggregations/participations")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })
})
