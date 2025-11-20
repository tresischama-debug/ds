import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist-submissions.json')
const MAX_WAITLIST_SIZE = 33

// Initialize waitlist file if it doesn't exist
function initializeWaitlistFile() {
  if (!fs.existsSync(WAITLIST_FILE)) {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify([]), 'utf-8')
  }
}

// Read waitlist entries
function readWaitlistEntries() {
  initializeWaitlistFile()
  const data = fs.readFileSync(WAITLIST_FILE, 'utf-8')
  return JSON.parse(data)
}

export async function GET() {
  try {
    const waitlist = readWaitlistEntries()
    const spotsLeft = MAX_WAITLIST_SIZE - waitlist.length
    const isFull = waitlist.length >= MAX_WAITLIST_SIZE

    return NextResponse.json(
      {
        total: MAX_WAITLIST_SIZE,
        filled: waitlist.length,
        spotsLeft: spotsLeft >= 0 ? spotsLeft : 0,
        isFull,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error reading waitlist:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
