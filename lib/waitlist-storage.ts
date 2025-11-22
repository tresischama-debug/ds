// Persistent JSON file storage for waitlist submissions
import fs from 'fs'
import path from 'path'

export interface WaitlistEntry {
  id: string
  timestamp: string
  goal: string | string[]
  age: string
  guardian: string
  gender: string
  challenges: string
  seriousness: string
  commitment: string
  experience: string
  name: string
  firstName: string
  lastName: string
  work: string
  phone: string
  email: string
  instagram: string
}

const DATA_FILE = path.join(process.cwd(), 'waitlist-entries.json')

export const MAX_WAITLIST_SIZE = 33

// Ensure the data file exists
function ensureDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]), 'utf-8')
  }
}

// Read entries from file
function readEntries(): WaitlistEntry[] {
  ensureDataFile()
  const data = fs.readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(data)
}

// Write entries to file
function writeEntries(entries: WaitlistEntry[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2), 'utf-8')
}

export function getWaitlistEntries(): WaitlistEntry[] {
  return readEntries()
}

export function addWaitlistEntry(entry: WaitlistEntry): boolean {
  const entries = readEntries()
  if (entries.length >= MAX_WAITLIST_SIZE) {
    return false
  }
  entries.push(entry)
  writeEntries(entries)
  return true
}

export function getWaitlistCount(): number {
  return readEntries().length
}

export function getSpotsLeft(): number {
  return Math.max(0, MAX_WAITLIST_SIZE - readEntries().length)
}

export function isWaitlistFull(): boolean {
  return readEntries().length >= MAX_WAITLIST_SIZE
}
