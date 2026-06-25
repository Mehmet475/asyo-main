<?php
/**
 * TATCO — Quote Form Mail Handler
 * POST: application/json or application/x-www-form-urlencoded
 * Response: { "success": true } or { "success": false, "message": "..." }
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

/* Parse incoming data (JSON or form-encoded) */
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data) || empty($data)) {
    $data = $_POST;
}
if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No data received.']);
    exit;
}

/* Basic validation */
$fullName = trim($data['Full Name'] ?? $data['Ad Soyad'] ?? '');
$company  = trim($data['Company']   ?? $data['Firma']    ?? '');
$phone    = trim($data['Phone']     ?? $data['Telefon']  ?? '');
$email    = trim($data['Email']     ?? $data['E-posta']  ?? '');

if (!$fullName || !$phone || !$email) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

/* Mail content */
$to          = 'ayso345934@gmail.com';
$subjectText = 'New Quote Request — TATCO';
$subject     = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';

$skipKeys = ['_subject', '_captcha', '_honey', '_next', '_replyto'];
$lines = ["NEW QUOTE REQUEST\n" . str_repeat('-', 40)];

foreach ($data as $key => $value) {
    if (in_array(strtolower($key), $skipKeys, true)) continue;
    $lines[] = mb_strtoupper($key, 'UTF-8') . ': ' . trim($value);
}
$lines[] = str_repeat('-', 40);
$lines[] = 'Submitted at: ' . date('d.m.Y H:i:s');
$body = implode("\n", $lines);

/* Mail headers */
$fromName = '=?UTF-8?B?' . base64_encode('TATCO Website') . '?=';
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "From: {$fromName} <noreply@tatco.eu>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: TATCO-FormHandler/1.0\r\n";

$ok = mail($to, $subject, $body, $headers);

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent. Please try again.']);
}
