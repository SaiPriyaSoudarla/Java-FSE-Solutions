# Inactive Users query

```sql
SELECT u.user_id, u.full_name, u.email
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.user_id
HAVING MAX(IFNULL(r.registration_date, '1900-01-01')) < (CURRENT_DATE - INTERVAL 90 DAY);
