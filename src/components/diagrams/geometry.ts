// Shared geometry for the vertical flow diagrams.
export const BOX = { x: 20, w: 300, h: 60, gap: 32, top: 16 }
export const VIEW_W = 480
export const rowY = (i: number) => BOX.top + i * (BOX.h + BOX.gap)
export const flowHeight = (rows: number) => rowY(rows - 1) + BOX.h + BOX.top
