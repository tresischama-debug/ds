import { NextResponse } from 'next/server'
import { getWaitlistEntries } from '@/lib/waitlist-storage'

export async function GET() {
  try {
    const entries = getWaitlistEntries()

    return NextResponse.json(
      {
        entries,
        count: entries.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error reading waitlist entries:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
