# 💧 EcoWise – Intelligent Water Demand Recommendation System

### Every Drop Counts. Every Action Matters.

**EcoWise** is a web-based intelligent water conservation assistant designed to help households monitor their daily water consumption, analyse usage patterns, identify unusual changes, and receive personalized recommendations for efficient water usage.

The project combines **water consumption monitoring, statistical analysis, and a rule-based recommendation engine** to transform consumption data into meaningful insights and actionable conservation strategies.

🌐 **Live Website:** https://ecowise-water-system.vercel.app

---

## 📌 Project Overview

Water conservation is an important aspect of sustainable resource management. However, many households lack accessible tools to monitor their daily consumption and understand their water usage patterns.

EcoWise addresses this challenge by providing an interactive platform where users can record their water consumption, analyse historical trends, and receive practical recommendations to improve water efficiency.

**Project Details**

| Attribute | Description |
|---|---|
| Project Title | Intelligent Water Demand Recommendation System |
| Website Name | EcoWise |
| Domain | Computational Intelligence |
| Application Type | Web Application |
| Frontend | React.js, Vite |
| Styling | Tailwind CSS |
| Data Visualization | Recharts |
| Icons | Lucide React |
| Data Storage | Browser LocalStorage |
| Deployment | Vercel |

## 🎯 Project Objectives

- Monitor daily household water consumption.
- Analyse daily, weekly, and monthly consumption patterns.
- Calculate average and per-person water consumption.
- Identify unusual increases and changes in water usage.
- Classify consumption using defined reference thresholds.
- Generate personalized water conservation recommendations.
- Maintain historical consumption records.
- Encourage responsible and sustainable water consumption.

## ✨ Key Features

### 1. Home Page

A modern landing page introducing EcoWise, its mission, and the importance of sustainable water consumption.

### 2. Interactive Dashboard

Displays important water consumption statistics, including:

- Total water consumption
- Average daily consumption
- Household members
- Per-person consumption
- Consumption status
- Historical comparisons
- Interactive consumption charts
- Personalized recommendations

### 3. Water Consumption Entry

Allows users to record household water consumption through a simple form.

Input information includes:

- Date
- Daily consumption in litres
- Number of household members
- Number of bathrooms (optional)
- Additional usage notes (optional)

Records are saved locally and used for further analysis.

### 4. Consumption Analysis

Provides statistical insights into water consumption through:

- Daily, weekly, and monthly trends
- Interactive line and bar charts
- Average consumption calculations
- Maximum and minimum consumption
- Per-person consumption analysis
- Historical comparisons
- Unusual consumption pattern detection

### 5. Smart Recommendations

EcoWise uses a rule-based recommendation approach to generate conservation suggestions based on recorded water usage.

Examples include:

| Detected Pattern | Suggested Action |
|---|---|
| Increasing consumption | Review recent changes in water usage habits |
| High per-person consumption | Reduce unnecessary water usage |
| Sudden consumption spike | Investigate possible leaks or unusual activities |
| Decreasing consumption | Continue effective conservation practices |
| Insufficient historical data | Record additional consumption data for better analysis |

Recommendations are intended to support informed decisions rather than provide definitive diagnoses.

### 6. Historical Data Management

Users can:

- View previous consumption records
- Search and filter records
- Edit or delete entries
- Import consumption data from CSV files
- Export historical records
- Compare consumption across different periods

### 7. About & Methodology

Explains the project's objectives, computational approach, system workflow, technologies, limitations, and future development possibilities.

## 🧠 Computational Intelligence Approach

EcoWise currently implements an explainable, rule-based recommendation system supported by statistical analysis.

### Data Processing

User-entered consumption data is validated and stored for analysis.

### Consumption Calculations

**Average Daily Consumption**

Average Daily Consumption = Total Recorded Consumption / Number of Recorded Days

**Per-Person Consumption**

Per-Person Consumption = Household Daily Consumption / Number of Household Members

**Percentage Change**

Percentage Change = ((Current Period Consumption − Previous Period Consumption) / Previous Period Consumption) × 100

These calculations support consumption comparisons and trend identification.

### Pattern Detection

The system evaluates recorded consumption patterns to identify:

- Unusual increases
- Increasing or decreasing trends
- High per-person consumption
- Stable consumption behaviour

### Recommendation Generation

Based on detected patterns, EcoWise provides relevant conservation suggestions with explanations.

The system uses configurable heuristic thresholds rather than a trained machine-learning model. These thresholds are intended for demonstration and should not be interpreted as universal water-consumption standards.

## 🔄 System Workflow

```text
User Enters Water Consumption
              |
              v
       Data Validation
              |
              v
       Data Storage
              |
              v
    Statistical Analysis
              |
              v
    Consumption Pattern Detection
              |
              v
    Rule-Based Recommendation Engine
              |
              v
       EcoWise Dashboard
```

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface |
| Vite | Development server and production build |
| JavaScript | Application logic |
| Tailwind CSS | Responsive styling |
| Recharts | Interactive data visualization |
| Lucide React | Icons |
| LocalStorage | Client-side data persistence |
| Vercel | Website deployment |

## 📁 Project Structure

```text
EcoWise/
│
├── src/                    # React source code
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lockfile
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Deployment configuration
├── .gitignore              # Git exclusions
└── README.md               # Project documentation
```

## 🚀 Installation and Setup

### Prerequisites

- Node.js
- npm
- A modern web browser

### 1. Clone the Repository

```bash
git clone https://github.com/ritwikadutta06-ops/EcoWise-Intelligent-Water-Demand-System.git
```

### 2. Navigate to the Project Directory

```bash
cd EcoWise-Intelligent-Water-Demand-System
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Website

Open the local URL displayed by Vite, typically:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

The generated production files will be placed in the `dist` directory.

## 📊 Demonstration

EcoWise provides a demonstration-data feature that can be used to explore its dashboard, charts, consumption analysis, and recommendation capabilities.

Demonstration records are illustrative and do not represent actual household measurements.

## 🔐 Data Storage and Privacy

The current version uses browser LocalStorage.

- Consumption records are stored locally in the user's browser.
- No cloud database is required.
- Different browsers and devices maintain separate records.
- Clearing browser storage may remove saved data.
- CSV export can be used to maintain a copy of historical records.

## ⚠️ Current Limitations

- Water consumption data must be entered manually.
- There is no direct smart water meter integration.
- The recommendation engine uses predefined rules rather than trained machine learning.
- Consumption thresholds are illustrative and may not reflect local household requirements.
- Browser LocalStorage does not synchronize data between devices.
- Unusual consumption does not necessarily indicate a leak.

## 🔮 Future Scope

Potential future improvements include:

1. Machine-learning-based water demand forecasting.
2. IoT-based smart water meter integration.
3. Automated anomaly detection.
4. Cloud database integration.
5. User authentication and personalized accounts.
6. Real-time consumption monitoring.
7. Regional consumption benchmarks.
8. Community-level water conservation analytics.
9. Advanced water efficiency reports.
10. Predictive conservation recommendations.

## 🌱 Sustainability Impact

EcoWise aims to promote water conservation by making consumption data easier to understand.

Through monitoring, analysis, and personalized recommendations, the platform encourages users to identify inefficient usage patterns and adopt more sustainable daily habits.

## 🌐 Live Deployment

**EcoWise Website:** https://ecowise-water-system.vercel.app

**GitHub Repository:** https://github.com/ritwikadutta06-ops/EcoWise-Intelligent-Water-Demand-System

---

### 💚 EcoWise

**Every Drop Counts. Every Action Matters.**

*Making water conservation smarter, simpler, and more accessible.*
