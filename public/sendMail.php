<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$name = str_replace(["\r", "\n"], ' ', $name);
$email = str_replace(["\r", "\n"], '', $email);

$to = 'hermannejrich@icloud.com';
$subject = 'Portfolio: new message from ' . $name;
$body = "Name: " . $name . "\nEmail: " . $email . "\n\n" . $message;

$headers = [
    'From: noreply@hermannejrich.developerakademie.net',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
}

echo json_encode(['success' => $sent]);