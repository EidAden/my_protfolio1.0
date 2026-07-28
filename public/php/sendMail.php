<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests are allowed."
    ]);

    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$message = trim($data["message"] ?? "");
$privacy = $data["privacy"] ?? false;

if (
    strlen($name) < 2 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($message) < 10 ||
    $privacy !== true
) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Invalid form data."
    ]);

    exit;
}

$recipient = "eiddev24@gmail.com";
$sender = "info@eidaden.com";

$cleanName = str_replace(["\r", "\n"], "", $name);
$cleanEmail = str_replace(["\r", "\n"], "", $email);

$subject = "New portfolio message from " . $cleanName;

$emailBody =
    "You received a new message from your portfolio.\n\n" .
    "Name: " . $cleanName . "\n" .
    "Email: " . $cleanEmail . "\n\n" .
    "Message:\n" . $message . "\n";

$headers = [
    "From: Eid Aden Portfolio <" . $sender . ">",
    "Reply-To: " . $cleanEmail,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8"
];

$mailSent = mail(
    $recipient,
    $subject,
    $emailBody,
    implode("\r\n", $headers)
);

if (!$mailSent) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "The email could not be sent."
    ]);

    exit;
}

echo json_encode([
    "success" => true,
    "message" => "Mail accepted by the server."
]);