import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist-submissions.json')
const MAX_WAITLIST_SIZE = 33

interface WaitlistEntry {
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

// Initialize waitlist file if it doesn't exist
function initializeWaitlistFile() {
  if (!fs.existsSync(WAITLIST_FILE)) {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify([]), 'utf-8')
  }
}

// Read waitlist entries
function readWaitlistEntries(): WaitlistEntry[] {
  initializeWaitlistFile()
  const data = fs.readFileSync(WAITLIST_FILE, 'utf-8')
  return JSON.parse(data)
}

// Write waitlist entries
function writeWaitlistEntries(entries: WaitlistEntry[]) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify(entries, null, 2), 'utf-8')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Read current waitlist
    const waitlist = readWaitlistEntries()

    // Check if waitlist is full
    if (waitlist.length >= MAX_WAITLIST_SIZE) {
      return NextResponse.json(
        { error: 'Waitlist is full', message: 'All 33 spots have been filled.' },
        { status: 400 }
      )
    }

    // Create new entry
    const newEntry: WaitlistEntry = {
      id: `waitlist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      goal: body.goal || '',
      age: body.age || '',
      guardian: body.guardian || '',
      gender: body.gender || '',
      challenges: body.challenges || '',
      seriousness: body.seriousness || '',
      commitment: body.commitment || '',
      experience: body.experience || '',
      name: body.name || '',
      firstName: body.firstName || '',
      lastName: body.lastName || '',
      work: body.work || '',
      phone: body.phone || '',
      email: body.email || '',
      instagram: body.instagram || '',
    }

    // Add to waitlist
    waitlist.push(newEntry)
    writeWaitlistEntries(waitlist)

    // Calculate spots left
    const spotsLeft = MAX_WAITLIST_SIZE - waitlist.length

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist',
        spotsLeft,
        position: waitlist.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing waitlist submission:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Failed to process your submission.' },
      { status: 500 }
    )
  }
}
