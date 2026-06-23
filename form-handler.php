<?php
/**
 * BUSER — Teklif Formu Mail Handler
 * POST: application/json veya application/x-www-form-urlencoded
 * Yanıt: { "success": true } veya { "success": false, "message": "..." }
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

/* Gelen veriyi parse et (JSON veya form-encoded) */
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data) || empty($data)) {
    $data = $_POST;
}
if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Veri alınamadı.']);
    exit;
}

/* Temel doğrulama */
$adSoyad = trim($data['Ad Soyad'] ?? '');
$firma   = trim($data['Firma']    ?? '');
$tel     = trim($data['Telefon']  ?? '');
$eposta  = trim($data['E-posta']  ?? '');

if (!$adSoyad || !$tel || !$eposta) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Zorunlu alanlar eksik.']);
    exit;
}

if (!filter_var($eposta, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Geçersiz e-posta adresi.']);
    exit;
}

/* Mail içeriği */
$to      = 'ayso345934@gmail.com';
$subjectText = 'Yeni Teklif Talebi - BUSER';
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';

$skipKeys = ['_subject', '_captcha', '_honey', '_next', '_replyto'];
$lines = ["YENİ TEKLİF TALEBİ\n" . str_repeat('-', 40)];

foreach ($data as $key => $value) {
    if (in_array(strtolower($key), $skipKeys, true)) continue;
    $lines[] = mb_strtoupper($key, 'UTF-8') . ': ' . trim($value);
}
$lines[] = str_repeat('-', 40);
$lines[] = 'Gönderim zamanı: ' . date('d.m.Y H:i:s');
$body = implode("\n", $lines);

/* Mail başlıkları */
$fromName = '=?UTF-8?B?' . base64_encode('BUSER Web Formu') . '?=';
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "From: {$fromName} <noreply@buser.com>\r\n";
$headers .= "Reply-To: {$eposta}\r\n";
$headers .= "X-Mailer: BUSER-FormHandler/1.0\r\n";

$ok = mail($to, $subject, $body, $headers);

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail gönderilemedi. Lütfen tekrar deneyin.']);
}
