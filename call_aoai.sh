curl "YOUR_ENDPOINT" \
-H "Content-Type: application/json" \
-H "api-key: YOUR_API_KEY" \
-d '{
    "messages": [
        {
            "role":"user",
            "content":"こんにちは"
        }
    ]
}'