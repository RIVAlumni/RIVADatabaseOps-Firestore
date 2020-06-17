import { readFileSync } from "fs"
import {
  apps,
  firestore,
  initializeTestApp,
  loadFirestoreRules,
  clearFirestoreData,
} from "@firebase/testing"

import "./matchers/toAllow"
import "./matchers/toDeny"

const projectId = `rules-spec-${Date.now()}`

export async function setup(
  auth?: object,
  data?: firestore.DocumentData,
  coverage?: boolean,
) {
  const app = await initializeTestApp({
    projectId,
    auth,
  })

  if (coverage) {
    console.info(
      `
      Coverage ID: ${projectId}
      http://localhost:8080/emulator/v1/projects/${projectId}:ruleCoverage.html
      `,
    )
  }

  const db: firestore.Firestore = app.firestore()

  await loadFirestoreRules({
    projectId,
    rules: readFileSync("rules/firestore.preload.rules", "utf-8"),
  })

  if (data) {
    for (const key in data) {
      const ref = db.doc(key)
      await ref.set(data[key])
    }
  }

  await loadFirestoreRules({
    projectId,
    rules: readFileSync("rules/firestore.rules", "utf-8"),
  })

  return db
}

export async function teardown() {
  return Promise.all([
    clearFirestoreData({ projectId }),
    apps().map(app => app.delete()),
  ])
}
