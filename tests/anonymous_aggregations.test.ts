import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

describe("User Aggregation Tests", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup(undefined)))
  afterEach(async () => await teardown())

  it("should deny reading/writing/deleting users aggregation document", async () => {
    const ref = db.doc("aggregations/users")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting members aggregation document", async () => {
    const ref = db.doc("aggregations/members")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting events aggregation document", async () => {
    const ref = db.doc("aggregations/events")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting participations aggregation document", async () => {
    const ref = db.doc("aggregations/participations")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })
})
