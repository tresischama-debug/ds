import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist-submissions.json')

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
    const entries = readWaitlistEntries()

    // Sort by timestamp, most recent first
    entries.sort((a: any, b: any) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    })

    return NextResponse.json(
      {
        success: true,
        entries,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error reading waitlist entries:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
