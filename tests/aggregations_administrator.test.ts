import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

import data from "../utils/predefinedData"

describe("Administrator Aggregation Tests", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup({ uid: "darwin" }, data)))
  afterEach(async () => await teardown())

  it("should allow reading/deleting and deny writing users aggregation document", async () => {
    const ref = db.doc("aggregations/users")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/deleting and deny writing members aggregation document", async () => {
    const ref = db.doc("aggregations/members")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/deleting and deny writing events aggregation document", async () => {
    const ref = db.doc("aggregations/events")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/deleting and deny writing participations aggregation document", async () => {
    const ref = db.doc("aggregations/participations")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toAllow()
  })
})
