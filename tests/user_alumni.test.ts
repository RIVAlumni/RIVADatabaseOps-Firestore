import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

import data from "../utils/predefinedData"

describe("Alumni User", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup({ uid: "windows" }, data)))
  afterEach(async () => await teardown())

  it("should deny reading/writing/deleting a user document", async () => {
    const ref = db.doc("users/darwin")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting own user document", async () => {
    const ref = db.doc("users/windows")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting a member document", async () => {
    const ref = db.doc("members/darwinMembership")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading/writing and deny deleting own member document", async () => {
    const ref = db.doc("members/windowsMembership")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting an event document", async () => {
    const ref = db.doc("events/20191211")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting a participation document", async () => {
    const ref = db.doc("participations/darwinParticipation")

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting own participation document", async () => {
    const ref = db.doc("participations/windowsParticipation")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })
})
