import { NextResponse } from 'next/server'
import {
  getWaitlistCount,
  getSpotsLeft,
  isWaitlistFull,
  MAX_WAITLIST_SIZE
} from '@/lib/waitlist-storage'

export async function GET() {
  try {
    const filled = getWaitlistCount()
    const spotsLeft = getSpotsLeft()
    const isFull = isWaitlistFull()

    return NextResponse.json(
      {
        total: MAX_WAITLIST_SIZE,
        filled,
        spotsLeft,
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
