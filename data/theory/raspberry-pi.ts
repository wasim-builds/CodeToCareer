import { TheoryTopic } from '@/types/theory';

export const raspberryPiTheory: TheoryTopic = {
  topicId: 'raspberry-pi',
  topicName: 'Raspberry Pi',
  category: 'Hardware & IoT',
  description: 'Raspberry Pi single-board computer for learning Linux, electronics, and IoT projects.',
  sections: [
    {
      id: 'hardware',
      title: 'Hardware and Setup',
      content: '',
      subsections: [
        { id: 'q1', title: 'What is Raspberry Pi?', content: 'A low-cost single-board computer with ARM CPU, GPIO pins, USB/HDMI/network interfaces used for education, hobby, and IoT.' },
        { id: 'q2', title: 'Common models?', content: 'Pi 4/5 (full), Pi 3, Zero/Zero W/2 for minimal form factor, Compute Module for embedded. Differ in CPU/RAM/IO.' },
        { id: 'q3', title: 'Power and storage?', content: 'Powered via USB-C/Micro-USB with sufficient amperage. Storage via microSD (or NVMe/USB boot on newer models). Use quality SD cards.' },
        { id: 'q4', title: 'OS options?', content: 'Raspberry Pi OS (Debian-based) common. Others: Ubuntu, Kali, RetroPie, Home Assistant OS. Flash with Raspberry Pi Imager.' },
        { id: 'q5', title: 'Headless setup?', content: 'Enable SSH by creating empty ssh file on boot partition; set Wi-Fi via wpa_supplicant.conf. Find IP via router scan or mDNS (raspberrypi.local).' },
        { id: 'q6', title: 'Cooling?', content: 'Use heatsinks/case fans for sustained loads. Pi 4/5 may throttle under heavy CPU/GPU. Passive cooling often enough for light tasks.' },
        { id: 'q7', title: 'GPIO basics?', content: '40-pin header with power, ground, and GPIO pins. Control via Python (RPi.GPIO/gpiozero), C, or shell. Beware 3.3V logic; avoid 5V directly.' },
        { id: 'q8', title: 'Safe shutdown?', content: 'Use `sudo shutdown -h now` to avoid SD corruption. Consider adding hardware power button with GPIO trigger.' },
        { id: 'q9', title: 'Networking?', content: 'Ethernet/Wi-Fi for connectivity. Configure static IP via dhcpcd or router reservation. For IoT, consider MQTT/HTTP/WebSockets.' },
        { id: 'q10', title: 'Peripherals?', content: 'USB keyboard/mouse, HDMI display, cameras (CSI/USB), HATs for sensors/motors. Ensure compatible voltage/current requirements.' }
      ]
    },
    {
      id: 'linux',
      title: 'Linux and System Management',
      content: '',
      subsections: [
        { id: 'q11', title: 'User and updates?', content: 'Default user was pi (now custom). Update with apt update && apt upgrade. Change password, set locale/timezone, enable SSH/VNC via raspi-config.' },
        { id: 'q12', title: 'File system care?', content: 'Use quality SD, minimize writes, enable log2ram or move logs to tmpfs, backup images. Use ext4; expand filesystem if needed.' },
        { id: 'q13', title: 'Services and autostart?', content: 'Use systemd services for startups. Create unit files to run scripts on boot. For GUI autostart, use LXDE autostart.' },
        { id: 'q14', title: 'Monitoring?', content: 'vcgencmd measure_temp, top/htop, free -h, iostat. Watch throttling flags. Use df -h for storage, journalctl for logs.' },
        { id: 'q15', title: 'Remote desktop?', content: 'Use VNC, xrdp, or WayVNC. For CLI, SSH. For file transfer, SFTP/SCP. Ensure firewall and strong passwords/keys.' },
        { id: 'q16', title: 'Backups?', content: 'Image SD with dd/Win32DiskImager. Use rsync for home dir backups. Keep off-device copies to prevent data loss.' },
        { id: 'q17', title: 'Security basics?', content: 'Change defaults, use SSH keys, disable unused services, apply updates, enable ufw if needed. Physical security matters for Pi deployments.' },
        { id: 'q18', title: 'Cron and timers?', content: 'Use cron or systemd timers for scheduled tasks (data collection, backups). Keep scripts idempotent.' },
        { id: 'q19', title: 'Package management?', content: 'APT for Debian-based distros. Use virtualenv/pyenv for Python projects to avoid system package conflicts.' },
        { id: 'q20', title: 'Time sync?', content: 'Use systemd-timesyncd or NTP. Accurate time is important for logs, TLS, and scheduled tasks.' }
      ]
    },
    {
      id: 'electronics',
      title: 'Electronics and GPIO Projects',
      content: '',
      subsections: [
        { id: 'q21', title: 'Safe GPIO usage?', content: '3.3V logic; exceeding damages board. Use resistors, level shifters for 5V devices. Limit current draw (16mA/pin, 50mA total typical).' },
        { id: 'q22', title: 'LED and buttons?', content: 'Wire LED with resistor to GPIO; control via Python. Buttons need pull-up/pull-down resistors or use internal pulls.' },
        { id: 'q23', title: 'Sensors?', content: 'Use I2C/SPI/UART sensors (temperature, IMU). Enable interfaces via raspi-config. Use libraries for quick integration.' },
        { id: 'q24', title: 'PWM and motors?', content: 'Hardware PWM pins control servos. For DC motors/steppers, use drivers (L298N, TB6612, ULN2003) and external power supplies.' },
        { id: 'q25', title: 'HATs?', content: 'Hardware Attached on Top add-on boards (PoE, motor controllers, DAC/ADC). Follow manufacturer pinout and driver setup.' },
        { id: 'q26', title: 'Camera modules?', content: 'Use CSI camera with libcamera or legacy raspistill/raspivid. Set correct overlays. Adjust exposure/white balance for image quality.' },
        { id: 'q27', title: 'I2C/SPI/UART uses?', content: 'I2C for multiple low-speed sensors, SPI for fast peripherals (displays/ADCs), UART for serial comms (GPS, MCU). Configure overlays as needed.' },
        { id: 'q28', title: 'Prototyping tools?', content: 'Use breadboards, jumpers, multimeter. Test circuits carefully before power-on. Label wires and document pin usage.' },
        { id: 'q29', title: 'ESD and wiring safety?', content: 'Handle with ESD care, avoid shorts, check polarity. Power off before wiring changes. Fuse external supplies for safety.' },
        { id: 'q30', title: 'Common mistakes?', content: 'Reversing power, connecting 5V signals directly, no resistors on LEDs/buttons, loose wires causing intermittent faults.' }
      ]
    },
    {
      id: 'projects',
      title: 'Projects and Networking',
      content: '',
      subsections: [
        { id: 'q31', title: 'Home server uses?', content: 'Run Pi-hole, Home Assistant, media servers, Git server, lightweight web apps. Favor wired Ethernet for reliability.' },
        { id: 'q32', title: 'IoT gateway?', content: 'Use MQTT broker (Mosquitto), Node-RED flows, connect sensors/MCUs. Bridge to cloud (AWS IoT, Azure IoT, GCP IoT).' },
        { id: 'q33', title: 'Retro gaming?', content: 'RetroPie/EmulationStation for classic games. Use appropriate ROMs legally. Configure controllers and cooling.' },
        { id: 'q34', title: 'AI/Edge ML?', content: 'Run lightweight models (TensorFlow Lite, PyTorch with optimization). Use Coral USB accelerator or NPU in newer boards for performance.' },
        { id: 'q35', title: 'Web projects?', content: 'Host Flask/Django/Node apps. Use Nginx reverse proxy and systemd services. TLS via Let’s Encrypt with DNS/HTTP challenges.' },
        { id: 'q36', title: 'Cluster computing?', content: 'Build small k3s/k8s clusters or Docker Swarm for learning. Watch power/thermal/network constraints; use shared storage carefully.' },
        { id: 'q37', title: 'Remote access?', content: 'Use Tailscale/ZeroTier/WireGuard for secure remote access instead of exposing SSH directly. Configure firewall rules.' },
        { id: 'q38', title: 'Data logging?', content: 'Log sensor data to CSV/SQLite/InfluxDB. Use Grafana for dashboards. Rotate logs to preserve SD lifespan.' },
        { id: 'q39', title: 'Robotics?', content: 'Combine motors, sensors, and computer vision. Use ROS/ROS2 on Pi; ensure real-time needs are modest or offload to microcontrollers.' },
        { id: 'q40', title: 'Power considerations?', content: 'For mobile projects, use battery packs with regulators. Budget current for sensors/motors separately from Pi 5V rail.' }
      ]
    },
    {
      id: 'maintenance',
      title: 'Security, Reliability, and Maintenance',
      content: '',
      subsections: [
        { id: 'q41', title: 'Hardening?', content: 'Disable unused interfaces, use SSH keys, fail2ban, firewall (ufw), keep system updated, restrict sudo, and secure physical access.' },
        { id: 'q42', title: 'SD card longevity?', content: 'Use high-endurance cards, reduce write load, move logs to tmpfs, consider USB/NVMe boot. Keep backups for quick restore.' },
        { id: 'q43', title: 'Watchdogs and uptime?', content: 'Enable hardware watchdog; write services with restart=on-failure. Monitor temps/voltage to avoid throttling-induced downtime.' },
        { id: 'q44', title: 'Licensing and compliance?', content: 'Follow open-source licenses for software; ensure rights for media/ROMs. For products, comply with regulatory requirements.' },
        { id: 'q45', title: 'Diagnostics?', content: 'Use dmesg/journalctl for logs, vcgencmd for hardware status, iperf for network tests. Swap hardware to isolate issues.' },
        { id: 'q46', title: 'Backups and imaging?', content: 'Regularly image the system or backup configs. Store off-device. Test restores periodically.' },
        { id: 'q47', title: 'Clocks and RTC?', content: 'No battery RTC on many Pis; add RTC module if offline. Ensure time sync for TLS and logs.' },
        { id: 'q48', title: 'Service reliability?', content: 'Use systemd for supervised processes, health checks, and logging. Avoid fragile cron-only long-running scripts.' },
        { id: 'q49', title: 'Community resources?', content: 'Use official docs, forums, GitHub, and tutorials. Many HATs provide sample code; verify wiring with vendor diagrams.' },
        { id: 'q50', title: 'Common pitfalls?', content: 'Undervoltage, poor SD cards, no backups, 5V GPIO mistakes, insufficient cooling, exposing SSH to internet, ignoring updates.' }
      ]
    }
  ]
};
