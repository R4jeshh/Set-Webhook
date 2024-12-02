document.getElementById('webhookForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const webhookUrl = document.getElementById('webhookUrl').value;
  const botToken = document.getElementById('botToken').value;

  if (!webhookUrl || !botToken) {
    alert('Please fill in both Webhook URL and Bot Token!');
    return;
  }

  const setWebhookUrl = `https://api.telegram.org/bot${botToken}/setWebhook`;
  const payload = JSON.stringify({ url: webhookUrl });

  try {
    const response = await fetch(setWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
    });

    const result = await response.json();

    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
  } catch (error) {
    document.getElementById('response').innerText = `Error: ${error.message}`;
  }
});
