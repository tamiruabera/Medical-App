# Ethio ANC — Antenatal Care Companion

**Ethio ANC** is an offline-capable Progressive Web App designed to support antenatal care practice by providing quick access to pregnancy dating tools, Ethiopian and Gregorian calendar conversion, WHO antenatal care contacts, danger signs, screening guidance, fetal development milestones, and hypertensive disorders of pregnancy support.

The application is intended for clinicians, residents, midwives, medical students, and other healthcare professionals involved in maternal health care.

---

## Live App

Access the published web app here:

https://tamiruabera.github.io/Medical-App/

---

## Key Features

### 1. Pregnancy Dating Calculator

Ethio ANC includes a practical pregnancy dating calculator that supports:

- Gestational age calculation
- Estimated date of delivery calculation
- Last menstrual period-based dating
- Known EDD-based calculation
- Known gestational age-based calculation
- Ultrasound-based dating support
- Trimester classification
- WHO ANC contact schedule generation

The calculator displays results in both Gregorian and Ethiopian calendar formats.

---

### 2. Ethiopian and Gregorian Calendar Support

The app supports direct Ethiopian calendar date entry and converts key pregnancy dates into Gregorian equivalents.

This is especially useful in clinical settings where Ethiopian calendar dates are commonly used for patient history, documentation, ANC follow-up, and delivery planning.

---

### 3. WHO 8-Contact ANC Schedule

The app includes the WHO antenatal care contact model, organized around the 8-contact schedule.

Included ANC contact points:

- First contact: ≤12 weeks
- Second contact: 20 weeks
- Third contact: 26 weeks
- Fourth contact: 30 weeks
- Fifth contact: 34 weeks
- Sixth contact: 36 weeks
- Seventh contact: 38 weeks
- Eighth contact: 40 weeks

Each contact includes relevant clinical tasks, screening reminders, counseling points, supplementation guidance, and follow-up considerations.

---

### 4. Danger Signs and Screening

Ethio ANC includes a dedicated section for pregnancy danger signs and important screening reminders.

Covered danger signs include:

- Vaginal bleeding
- Severe headache or visual symptoms
- Convulsions
- Severe abdominal or epigastric pain
- Fever
- Reduced or absent fetal movement
- Watery vaginal leakage
- Severe vomiting
- Sudden swelling of the face, hands, or legs
- Difficulty breathing

The app also summarizes common ANC laboratory screening items, including anemia screening, blood group and Rh status, urinalysis, HIV testing, syphilis screening, hepatitis B screening, and gestational diabetes screening.

---

### 5. Gestational Diabetes Screening Reference

The app provides diagnostic threshold references for gestational diabetes using a 75 g oral glucose tolerance test.

Included values:

- Fasting glucose threshold
- One-hour glucose threshold
- Two-hour glucose threshold

The reference is intended to support quick clinical review and should be interpreted according to local protocols.

---

### 6. Fetal Development Milestones

Ethio ANC includes a fetal development timeline covering major pregnancy milestones, including:

- Early organogenesis
- Cardiac activity detection
- Fetal movement development
- Quickening
- Anatomy scan window
- Viability considerations
- Term pregnancy milestones

This section is useful for clinical explanation, teaching, and patient counseling.

---

### 7. Hypertensive Disorders of Pregnancy Toolkit

The app includes a clinical toolkit for hypertensive disorders of pregnancy.

Covered topics include:

- Gestational hypertension
- Pre-eclampsia
- Pre-eclampsia with severe features
- Eclampsia
- HELLP syndrome
- Magnesium sulfate guidance
- Acute blood pressure control
- Emergency management reminders

The toolkit is designed for educational and clinical support purposes and does not replace local protocols or clinical judgment.

---

## Progressive Web App Support

Ethio ANC is configured as a Progressive Web App.

PWA features include:

- Installable app experience
- Offline-capable structure
- Web app manifest
- Service worker support
- App icons
- Maskable icons
- Screenshots for PWA packaging
- GitHub Pages deployment support
- PWABuilder compatibility for Android packaging

The app can be launched from a browser or installed on supported devices as a standalone application.

---

## Android APK Packaging

This project is prepared for Android packaging using PWABuilder.

To generate an Android package:

1. Publish the app using GitHub Pages.
2. Open PWABuilder.
3. Enter the live GitHub Pages URL:

   https://tamiruabera.github.io/Medical-App/

4. Allow PWABuilder to scan the PWA.
5. Select Android packaging.
6. Download the generated test package, APK, or app bundle as needed.

---

## Project Structure

```text
Medical-App/
├── index.html
├── manifest.json
├── sw.js
├── offline.html
├── README.md
├── .nojekyll
├── icons/
└── screenshots/
