<?php
// TATCO — Mail Diagnostik (Testlerden sonra bu dosyayı silin)
$to = 'ayso345934@gmail.com';
$out = [];

$out['PHP Sürümü']     = phpversion();
$out['Sendmail Yolu']  = ini_get('sendmail_path') ?: '(boş)';
$out['SMTP Host']      = ini_get('SMTP') ?: '(boş)';
$out['disable_functions içinde mail var mı?'] =
    (strpos(ini_get('disable_functions'), 'mail') !== false) ? 'EVET — mail() KAPALI!' : 'Hayır';

// Test 1: En sade mail
$r1 = @mail($to, 'TATCO Test 1', 'Basit test.', 'From: webmaster@localhost');
$out['Test 1 — Temel mail()'] = $r1 ? 'BASARILI' : 'BASARISIZ';

// Test 2: info@tatco.eu gönderici
$r2 = @mail($to, 'TATCO Test 2', 'info@tatco.eu gonderen test.', 'From: info@tatco.eu');
$out['Test 2 — From: info@tatco.eu'] = $r2 ? 'BASARILI' : 'BASARISIZ';

// Test 3: -f parametresi ile
$r3 = @mail($to, 'TATCO Test 3', '-f parametresi ile test.', 'From: info@tatco.eu', '-f info@tatco.eu');
$out['Test 3 — -f parametresi ile'] = $r3 ? 'BASARILI' : 'BASARISIZ';

header('Content-Type: text/plain; charset=utf-8');
echo "=== TATCO MAIL TANI SONUCLARI ===\n\n";
foreach ($out as $k => $v) {
    echo str_pad($k, 45) . ": " . $v . "\n";
}
echo "\nNOT: Bu dosyayi test sonrasi sunucudan silin.\n";
