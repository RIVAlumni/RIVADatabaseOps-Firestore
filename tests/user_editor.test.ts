import { random } from "faker"
import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

import data from "../utils/predefinedData"

describe("Editor User", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup({ uid: "linux" }, data)))
  afterEach(async () => await teardown())

  it("should deny reading/writing/deleting any user document", async () => {
    const ref = db.doc(`users/${random.uuid()}`)

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading and deny writing/deleting own user document", async () => {
    const ref = db.doc("users/linux")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading/writing and deny deleting any member document", async () => {
    const ref = db.doc(`members/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading/writing and deny deleting own member document", async () => {
    const ref = db.doc("members/linuxMembership")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting any remarks document", async () => {
    const ref = db.doc(`members/${random.uuid()}/remarks/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting own remarks document", async () => {
    const ref = db.doc(`members/linuxMembership/remarks/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading/writing and deny deleting any event document", async () => {
    const ref = db.doc(`events/${random.number(99999999)}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading/writing and deny deleting any participation document", async () => {
    const ref = db.doc(`participations/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })

  it("should allow reading/writing and deny deleting own participation document", async () => {
    const ref = db.doc("participations/linuxParticipation")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toDeny()
  })
})
