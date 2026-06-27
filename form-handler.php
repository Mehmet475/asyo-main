<?php
/**
 * TATCO — Quote Form Mail Handler
 * Alıcı: ayso345934@gmail.com
 * POST: application/json
 * Yanıt: { "success": true } veya { "success": false, "message": "..." }
 */

ob_start();

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    ob_end_clean();
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_end_clean();
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data) || empty($data)) {
    $data = $_POST;
}
if (empty($data)) {
    ob_end_clean();
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No data received.']);
    exit;
}

/* Zorunlu alanlar */
$fullName = trim($data['Full Name'] ?? $data['Ad Soyad'] ?? '');
$phone    = trim($data['Phone']     ?? $data['Telefon']  ?? '');
$email    = trim($data['Email']     ?? $data['E-posta']  ?? '');

if (!$fullName || !$phone || !$email) {
    ob_end_clean();
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    ob_end_clean();
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

/* Alıcı — sadece Teklif Al formu */
$to          = 'ayso345934@gmail.com';
$subjectText = 'Yeni Teklif Talebi — TATCO';
$subject     = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';

/* E-posta gövdesi — düzenli format */
$skipKeys = ['_subject', '_captcha', '_honey', '_next', '_replyto', '_form_id', '_page_url', '_page_title'];

$fieldLabels = [
    'Full Name' => 'Ad Soyad',
    'Company'   => 'Firma',
    'Phone'     => 'Telefon',
    'Email'     => 'E-posta',
    'Product / Service' => 'İlgilenilen Ürün / Hizmet',
    'Product'   => 'Ürün',
    'Message'   => 'Mesaj / Proje Detayları',
];

$lines   = [];
$lines[] = '╔══════════════════════════════════════╗';
$lines[] = '   YENİ TEKLİF TALEBİ — TATCO';
$lines[] = '╚══════════════════════════════════════╝';
$lines[] = '';

$orderedKeys = ['Full Name', 'Company', 'Phone', 'Email', 'Product / Service', 'Product', 'Message'];
$printed     = [];

foreach ($orderedKeys as $key) {
    if (isset($data[$key]) && $data[$key] !== '') {
        $label     = $fieldLabels[$key] ?? $key;
        $lines[]   = '▸ ' . $label . ': ' . trim($data[$key]);
        $printed[] = $key;
    }
}

/* Kalan alanlar (bilinmeyenler) */
foreach ($data as $key => $value) {
    if (in_array($key, $printed, true)) continue;
    if (in_array(strtolower($key), $skipKeys, true)) continue;
    if (trim($value) === '') continue;
    $label   = $fieldLabels[$key] ?? $key;
    $lines[] = '▸ ' . $label . ': ' . trim($value);
}

$lines[] = '';
$lines[] = str_repeat('─', 42);

/* Kaynak bilgisi */
$pageTitle = trim($data['_page_title'] ?? '');
$pageUrl   = trim($data['_page_url']   ?? '');
if ($pageTitle) $lines[] = 'Sayfa    : ' . $pageTitle;
if ($pageUrl)   $lines[] = 'URL      : ' . $pageUrl;
$lines[] = 'Tarih    : ' . date('d.m.Y H:i:s');
$lines[] = str_repeat('─', 42);

$body = implode("\n", $lines);

/* Mail başlıkları — From cPanel'deki gerçek hesap */
$senderEmail = 'info@tatco.eu';
$fromName    = '=?UTF-8?B?' . base64_encode('TATCO Website') . '?=';
$headers     = "MIME-Version: 1.0\r\n";
$headers    .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers    .= "Content-Transfer-Encoding: 8bit\r\n";
$headers    .= "From: {$fromName} <{$senderEmail}>\r\n";
$headers    .= "Reply-To: {$email}\r\n";
$headers    .= "X-Mailer: TATCO-FormHandler/2.0\r\n";

$ok = @mail($to, $subject, $body, $headers, '-f ' . $senderEmail);

ob_end_clean();

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail gönderilemedi. Lütfen info@tatco.eu adresine yazın.']);
}
