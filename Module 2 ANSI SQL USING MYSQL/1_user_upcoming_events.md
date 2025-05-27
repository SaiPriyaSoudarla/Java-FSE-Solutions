# User Upcoming Events Query

```sql
SELECT 
  u.full_name, 
  e.title AS event_title, 
  e.city AS event_city,
  e.start_date
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE 
  e.status = 'upcoming' 
  AND LOWER(TRIM(u.city)) = LOWER(TRIM(e.city))
ORDER BY e.start_date;
