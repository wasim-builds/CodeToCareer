import { TheoryTopic } from '@/types/theory';

export const arduinoTheory: TheoryTopic = {
  topicId: 'arduino',
  topicName: 'Arduino',
  category: 'Hardware & IoT',
  description: 'Arduino fundamentals, hardware, coding patterns, interfacing, communication, and deployment best practices.',
  sections: [
    {
      id: 'basics',
      title: 'Basics and Hardware',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Arduino?', content: 'An open-source electronics platform with microcontroller boards (Uno, Nano, Mega) and a simple toolchain for rapid prototyping.' },
        { id: 'q2', title: 'Common boards?', content: 'Uno/Nano (ATmega328P), Mega (ATmega2560), Leonardo (ATmega32u4), Due (ARM), ESP32/ESP8266 variants with Wi-Fi.' },
        { id: 'q3', title: 'Digital vs analog pins?', content: 'Digital pins read/write HIGH/LOW; analog pins read varying voltages (ADC). Some pins support PWM output (~).' },
        { id: 'q4', title: 'Power considerations?', content: 'Supply via USB (5V) or barrel/Vin (7–12V). Respect current limits (~500mA USB). Use regulators and decoupling capacitors.' },
        { id: 'q5', title: 'Pin limitations?', content: 'Max current per I/O ~20mA (absolute 40mA). Use transistors/driver ICs for motors/relays/LED strips.' },
        { id: 'q6', title: 'Clock speed and memory?', content: 'Uno runs at 16 MHz with 2KB SRAM, 32KB flash. Optimize code size and RAM usage for stability.' },
        { id: 'q7', title: 'Bootloader?', content: 'Pre-installed to allow sketch upload over serial/USB. Can be replaced via ISP if corrupted or for custom fuses.' },
        { id: 'q8', title: 'Shields?', content: 'Stackable boards providing functions (Ethernet, motor drivers, relays, GPS, LCD). Ensure pin compatibility and power budget.' },
        { id: 'q9', title: 'Prototyping tools?', content: 'Breadboards, jumper wires, multimeter, logic analyzer, oscilloscope for debugging signals and power.' },
        { id: 'q10', title: 'Safety basics?', content: 'Check voltage/current ratings, avoid shorts, use common ground, add flyback diodes for inductive loads.' }
      ]
    },
    {
      id: 'coding',
      title: 'Coding and Structure',
      content: '',
      subsections: [
        { id: 'q11', title: 'Sketch lifecycle?', content: 'setup() runs once for initialization; loop() runs repeatedly. Avoid long blocking calls unless intentional.' },
        { id: 'q12', title: 'Pin modes?', content: 'Use pinMode(pin, INPUT/OUTPUT/INPUT_PULLUP). INPUT_PULLUP uses internal resistor; invert logic (LOW = pressed).' },
        { id: 'q13', title: 'PWM and analogWrite?', content: 'analogWrite on PWM-capable pins uses duty cycle to approximate analog output. Frequency depends on timer/pin.' },
        { id: 'q14', title: 'Timing without delay?', content: 'Use millis()/micros() for non-blocking timing; store previous timestamps and compare for scheduling.' },
        { id: 'q15', title: 'Libraries?', content: 'Use Library Manager; include headers and initialize in setup. Prefer well-maintained libraries for sensors/displays.' },
        { id: 'q16', title: 'Memory management?', content: 'Prefer global/static small buffers; avoid heavy dynamic allocation; use F() macro to store strings in flash.' },
        { id: 'q17', title: 'Interrupts?', content: 'attachInterrupt for critical events (edges/changes). Keep ISRs short; avoid delay/Serial in ISR.' },
        { id: 'q18', title: 'Serial debug?', content: 'Use Serial.begin(baud); print statuses; ensure baud matches monitor. Avoid excessive logging in time-critical code.' },
        { id: 'q19', title: 'State machines?', content: 'Model logic as finite states to avoid blocking code and manage complex behaviors cleanly.' },
        { id: 'q20', title: 'Unit testing?', content: 'Use ArduinoUnit or PlatformIO Unity; separate logic from hardware access to test on host when possible.' }
      ]
    },
    {
      id: 'sensors',
      title: 'Sensors, Actuators, and Interfacing',
      content: '',
      subsections: [
        { id: 'q21', title: 'Analog sensors?', content: 'Use voltage dividers/potentiometers; read via analogRead (10-bit on Uno). Scale/offset values as needed.' },
        { id: 'q22', title: 'Digital sensors?', content: 'Use digitalRead for switches/encoders; debounce with RC, code timing, or libraries; use interrupts for edges.' },
        { id: 'q23', title: 'I2C devices?', content: 'Wire library on SDA/SCL pins; devices have addresses; use pull-up resistors; scan with I2C scanner.' },
        { id: 'q24', title: 'SPI devices?', content: 'Use SPI library; MOSI/MISO/SCK plus CS per device. Manage clock speed and modes (CPOL/CPHA).' },
        { id: 'q25', title: 'UART peripherals?', content: 'Hardware Serial for Uno (pins 0/1). Use SoftwareSerial on other pins with lower baud; mind conflicts with USB serial.' },
        { id: 'q26', title: 'Motors and drivers?', content: 'Use motor drivers (L298N, DRV8825) or MOSFETs; provide external power; include flyback diodes; avoid driving directly.' },
        { id: 'q27', title: 'LED control?', content: 'Use resistors for single LEDs; for strips (WS2812) use level shifting, separate power, and common ground.' },
        { id: 'q28', title: 'Displays?', content: 'LCDs via I2C/SPI/parallel; OLED/TFT libraries; manage refresh to avoid flicker and timing conflicts.' },
        { id: 'q29', title: 'Power management?', content: 'Sleep modes reduce consumption; use watchdog timer; disable unused peripherals; choose low-power boards for battery.' },
        { id: 'q30', title: 'Calibration?', content: 'Calibrate sensors (offset/gain); average/median filter noisy signals; consider temperature drift.' }
      ]
    },
    {
      id: 'connectivity',
      title: 'Connectivity and IoT',
      content: '',
      subsections: [
        { id: 'q31', title: 'Wi-Fi options?', content: 'Use ESP8266/ESP32 or Wi-Fi shields. Manage reconnection, time sync (NTP), and credentials securely.' },
        { id: 'q32', title: 'Bluetooth?', content: 'HC-05/06 for classic serial BT, or BLE modules/ESP32 BLE for low energy. Handle pairing and services.' },
        { id: 'q33', title: 'MQTT?', content: 'Lightweight pub/sub over TCP. Use keep-alive, QoS, will messages; handle reconnect and buffering.' },
        { id: 'q34', title: 'HTTP/REST?', content: 'Use client libraries; minimize payload; consider HTTPS support limits and certificates on small MCUs.' },
        { id: 'q35', title: 'LoRa/long range?', content: 'LoRa modules (SX127x) via SPI; low data rate, long range. Respect duty-cycle regulations.' },
        { id: 'q36', title: 'Over-the-air updates?', content: 'ESP32/ESP8266 support OTA; ensure power stability; verify binary integrity; fail-safe partitions.' },
        { id: 'q37', title: 'Timekeeping?', content: 'Use RTC modules (DS3231) for accurate time; sync with NTP; battery backup for RTC.' },
        { id: 'q38', title: 'Security considerations?', content: 'Avoid hardcoding secrets; use token rotation; validate inputs; restrict network services; prefer TLS when feasible.' },
        { id: 'q39', title: 'Cloud integrations?', content: 'Send data to IoT hubs (MQTT/HTTP) like Azure IoT, AWS IoT, Adafruit IO; manage credentials and topics.' },
        { id: 'q40', title: 'Local gateways?', content: 'Bridge to Raspberry Pi/Home Assistant for heavier processing, storage, or visualization.' }
      ]
    },
    {
      id: 'debug',
      title: 'Testing and Troubleshooting',
      content: '',
      subsections: [
        { id: 'q41', title: 'Common upload issues?', content: 'Wrong board/port, driver missing, bootloader corrupted, busy serial, or bad USB cable. Press reset if needed.' },
        { id: 'q42', title: 'Noisy readings?', content: 'Use filtering (moving average/median), shielding, twisted pairs, decoupling caps, and proper grounding.' },
        { id: 'q43', title: 'Power brownouts?', content: 'Symptoms: random resets. Use sufficient supply, capacitors, and separate motor power; check voltage sag.' },
        { id: 'q44', title: 'Debugging I2C?', content: 'Run I2C scanner, check pull-ups, verify addresses, scope signals, reduce clock speed.' },
        { id: 'q45', title: 'Serial conflicts?', content: 'Avoid using pins 0/1 on Uno for other devices while using USB serial. Use SoftwareSerial/AltSerial if needed.' },
        { id: 'q46', title: 'Floating inputs?', content: 'Enable INPUT_PULLUP or external resistors to avoid random HIGH/LOW readings on buttons/sensors.' },
        { id: 'q47', title: 'Memory crashes?', content: 'Watch stack/heap; reduce global arrays; store strings in flash; avoid recursion; check for buffer overruns.' },
        { id: 'q48', title: 'Timing bugs?', content: 'Replace delay() with millis(); test edge cases; log timestamps; avoid blocking libraries.' },
        { id: 'q49', title: 'EMI issues?', content: 'Short wires, decouple power, use ferrite beads/shielding; separate analog/digital grounds carefully.' },
        { id: 'q50', title: 'Project handoff tips?', content: 'Document wiring diagrams, pin maps, library versions, and calibration steps; include enclosure and safety notes.' }
      ]
    }
  ]
};
