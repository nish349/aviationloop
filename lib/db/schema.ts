import { pgTable, serial, text, timestamp, doublePrecision } from 'drizzle-orm/pg-core';

export const incidents = pgTable('incidents', {
  id: serial('id').primaryKey(),
  reportNumber: text('report_number').notNull(),
  location: text('location'),
  latitude: doublePrecision('latitude'),
  longitude: doublePrecision('longitude'),
  date: timestamp('date'),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
