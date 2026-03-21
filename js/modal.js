/**
 * modal.js — Project detail modals + Certificate lightbox
 *
 * To add/edit project details, update the PROJECTS object below.
 */

// ── Project data ────────────────────────────────────────────────
const PROJECTS = {
  credit: {
    icon: '💳',
    badge: '74.8% Accuracy',
    title: 'Credit Risk Analysis',
    objective: 'To predict whether a bank customer is a good or bad credit risk using machine learning, helping financial institutions make faster and more accurate lending decisions.',
    about: 'This project uses the German Credit dataset, which contains 1,000 records of loan applicants with 20 features including credit history, employment status, loan amount, and personal details. The goal was to build a reliable classification model that flags high-risk applicants before loan approval.',
    approach: [
      'Performed Exploratory Data Analysis (EDA) to understand feature distributions and class imbalance',
      'Applied feature engineering — encoding categorical variables, scaling numerical features',
      'Used PCA for dimensionality reduction to remove noise and improve model efficiency',
      'Trained and compared Logistic Regression, SVM, and Random Forest classifiers',
      'Tuned hyperparameters using GridSearchCV with cross-validation',
      'Evaluated models using Precision, Recall, F1-Score, and Confusion Matrix',
      'Deployed the final model as an interactive desktop application using Tkinter GUI',
    ],
    tags: ['Python', 'Scikit-learn', 'PCA', 'GridSearchCV', 'SVM', 'Random Forest', 'Tkinter', 'Pandas'],
    github: 'https://github.com/ANJANA-K-HUB/German-Credit-Risk-Analysis',
  },
  image: {
    icon: '🖼️',
    badge: '83.75% Accuracy',
    title: 'Image Classification',
    objective: 'To build a supervised image classification system that can accurately categorise images into predefined classes using traditional computer vision and machine learning techniques.',
    about: 'This project explores classical computer vision — using OpenCV for image preprocessing and feature extraction, then feeding those features into an SVM classifier. It demonstrates how strong results can be achieved without deep learning when the right features are engineered.',
    approach: [
      'Loaded and preprocessed raw images using OpenCV — resizing, grayscale conversion, noise reduction',
      'Extracted meaningful visual features from preprocessed images',
      'Applied feature scaling to normalise the input data',
      'Split data into training and test sets for unbiased evaluation',
      'Trained a Support Vector Machine (SVM) classifier on the extracted features',
      'Evaluated performance using Confusion Matrix and Classification Report',
    ],
    tags: ['Python', 'OpenCV', 'SVM', 'Scikit-learn', 'Feature Extraction', 'Computer Vision'],
    github: 'https://github.com/ANJANA-K-HUB/Image-Classification',
  },
  twitter: {
    icon: '🐦',
    badge: 'NLP · TF-IDF',
    title: 'Twitter Sentiment Analysis',
    objective: 'To classify the sentiment of tweets into multiple categories (positive, negative, neutral) using Natural Language Processing techniques on real-world, noisy social media text.',
    about: 'Social media text is messy — full of slang, abbreviations, hashtags, and misspellings. This project tackles that challenge by building a robust NLP preprocessing pipeline followed by a TF-IDF based machine learning classifier to detect sentiment at scale.',
    approach: [
      'Collected and cleaned raw Twitter data with significant noise and informal language',
      'Built a full NLP preprocessing pipeline: tokenization, lowercasing, punctuation removal',
      'Removed stopwords and applied stemming to reduce words to their root forms',
      'Converted processed text to numerical features using TF-IDF vectorisation',
      'Trained and compared multiple classifiers for multi-class sentiment prediction',
      'Evaluated using Confusion Matrix, Precision, Recall, and F1-Score per class',
    ],
    tags: ['Python', 'NLTK', 'TF-IDF', 'Scikit-learn', 'NLP', 'Text Classification'],
    github: 'https://github.com/ANJANA-K-HUB/Twitter-Sentiment-Analysis',
  },
  attrition: {
    icon: '👥',
    badge: 'HR Analytics',
    title: 'Employee Attrition Prediction',
    objective: 'To predict which employees are likely to leave an organisation, enabling HR teams to take proactive steps to improve retention and reduce hiring costs.',
    about: 'Employee attrition is a costly problem for businesses. This project uses HR analytics data to build a machine learning model that identifies at-risk employees based on factors like job satisfaction, salary, work-life balance, and years at company. The outputs are designed to be interpretable for HR decision-makers.',
    approach: [
      'Performed detailed EDA on HR dataset to identify key attrition drivers',
      'Handled class imbalance between employees who left and those who stayed',
      'Engineered new features from existing HR attributes',
      'Trained classification models and evaluated with appropriate metrics',
      'Analysed feature importance to identify the top factors causing attrition',
      'Presented findings with clear visualisations using Seaborn and Matplotlib',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Matplotlib', 'Feature Importance'],
    github: 'https://github.com/ANJANA-K-HUB/Employee-Attrition-Prediction-using-ML',
  },
  emotions: {
    icon: '😊',
    badge: 'Multi-label NLP',
    title: 'Emotions in Text',
    objective: 'To detect and classify human emotions — joy, sadness, anger, and fear — from short text inputs using NLP-based feature engineering and classical machine learning classifiers.',
    about: 'Understanding emotion in text has applications in mental health monitoring, customer feedback analysis, and social media research. This project builds a multi-class emotion detector using annotated text data, with a focus on extracting the right linguistic features to distinguish between subtle emotional differences.',
    approach: [
      'Preprocessed labelled text data with emotion annotations',
      'Applied NLP pipeline: tokenization, stopword removal, lemmatisation',
      'Engineered text features suitable for emotion classification',
      'Trained and compared multiple ML classifiers on the processed data',
      'Evaluated performance per emotion class using F1-Score and Confusion Matrix',
      'Analysed misclassifications to understand model limitations',
    ],
    tags: ['Python', 'NLTK', 'Scikit-learn', 'NLP', 'Text Classification', 'Pandas'],
    github: 'https://github.com/ANJANA-K-HUB/Emotions-in-Text',
  },
  customer: {
    icon: '🛒',
    badge: 'Segmentation',
    title: 'Customer Behaviour Classification',
    objective: 'To classify e-commerce customers based on their browsing and purchase behaviour, helping businesses understand user segments and predict purchasing intent.',
    about: 'Customer behaviour data from e-commerce platforms contains rich signals about user intent. This project analyses transactional and behavioural features to segment customers and build a classification model that predicts whether a session will result in a purchase — directly supporting marketing and sales strategy.',
    approach: [
      'Loaded and explored e-commerce session data through comprehensive EDA',
      'Identified and handled missing values, outliers, and skewed distributions',
      'Engineered behavioural features from raw session attributes',
      'Built classification pipeline to predict purchase intent',
      'Evaluated model and analysed which features most influence buying decisions',
      'Visualised customer segments and behaviour patterns with Seaborn',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Seaborn', 'Matplotlib'],
    github: 'https://github.com/ANJANA-K-HUB/Customer-Behaviour-Classification',
  },
  cotton: {
    icon: '🌿',
    badge: 'Deep Learning',
    title: 'Cotton Plant Disease Classification',
    objective: 'To automatically detect and classify diseases in cotton plant leaves using deep learning, enabling early intervention and reducing crop loss in agriculture.',
    about: 'Cotton crop diseases cause significant agricultural losses worldwide. Early and accurate detection from leaf images can help farmers take timely action. This project builds a Convolutional Neural Network (CNN) trained on labelled plant leaf images to classify healthy and diseased cotton plants across multiple disease categories.',
    approach: [
      'Collected and preprocessed a dataset of cotton plant leaf images with disease labels',
      'Applied data augmentation — flipping, rotation, zoom — to improve model generalisation',
      'Built and trained a CNN architecture using TensorFlow and Keras',
      'Fine-tuned the model with dropout and batch normalisation to prevent overfitting',
      'Evaluated using accuracy, precision, recall, and confusion matrix per disease class',
      'Visualised prediction confidence and misclassified samples for error analysis',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Image Classification', 'Data Augmentation'],
    github: 'https://github.com/ANJANA-K-HUB/Deep-Learning-Project',
  },
  facemask: {
    icon: '😷',
    badge: 'Real-time Detection',
    title: 'Face Mask Detection',
    objective: 'To build a real-time system that detects whether a person is wearing a face mask, using deep learning combined with computer vision for live video and static images.',
    about: 'With public health guidelines requiring face masks in many settings, automated detection became practically important. This project combines a trained CNN classifier with OpenCV\'s face detection to create a system that processes live webcam feeds or images and labels each face as "Mask" or "No Mask" in real time.',
    approach: [
      'Prepared a dataset of face images labelled as with-mask and without-mask',
      'Preprocessed images — resizing, normalisation, and augmentation for balance',
      'Built and trained a binary CNN classifier using TensorFlow and Keras',
      'Integrated the trained model with OpenCV for real-time face detection',
      'Applied bounding boxes and confidence labels over detected faces in video frames',
      'Tested on live webcam feed and static images for end-to-end validation',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'Real-time Detection'],
    github: 'https://github.com/ANJANA-K-HUB/Deep-Learning-Project',
  },
  hurricane: {
    icon: '🌪️',
    badge: 'Satellite Imagery',
    title: 'Hurricane Damage Classification',
    objective: 'To classify satellite images as damaged or undamaged following a hurricane, helping disaster response teams prioritise relief efforts in affected areas.',
    about: 'After natural disasters, rapid damage assessment is critical for directing emergency resources. This project trains a deep learning model on aerial and satellite imagery to automatically detect hurricane-damaged buildings and infrastructure, significantly speeding up post-disaster analysis compared to manual inspection.',
    approach: [
      'Processed labelled satellite imagery dataset of pre- and post-hurricane areas',
      'Applied image preprocessing and augmentation to handle limited training data',
      'Built and trained a CNN for binary classification: damaged vs undamaged',
      'Used transfer learning techniques to improve accuracy with limited data',
      'Evaluated model performance with precision, recall, and F1-score',
      'Tested on unseen satellite patches to validate real-world applicability',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning', 'Satellite Imagery'],
    github: 'https://github.com/ANJANA-K-HUB/Deep-Learning-Project',
  },
  movie: {
    icon: '🎬',
    badge: 'Bi-LSTM · NLP',
    title: 'Movie Review Sentiment Classification',
    objective: 'To classify movie reviews as positive or negative using a Bidirectional LSTM model trained on ~50,000 IMDb-style reviews, building an end-to-end NLP pipeline for binary sentiment analysis.',
    about: 'This project builds a complete NLP pipeline for binary sentiment analysis on movie reviews. The dataset contains ~49,969 rows (49,551 unique reviews after removing duplicates) with two columns: review (raw text) and sentiment (1 = Positive, 0 = Negative). The class distribution is approximately balanced — ~24,866 positive and ~24,685 negative reviews.',
    approach: [
      'Loaded movie_data.csv and removed 418 duplicate reviews leaving 49,551 unique samples',
      'Cleaned and preprocessed raw review text — lowercasing, punctuation removal, stopword filtering',
      'Tokenised text and converted to padded numerical sequences using Keras Tokenizer',
      'Built model with Embedding layer → Bidirectional LSTM → Dropout → Dense (sigmoid)',
      'Trained with binary cross-entropy loss and monitored validation accuracy',
      'Evaluated using accuracy, precision, recall, and F1-score on held-out test set',
      'Compared Bidirectional LSTM performance against standard LSTM baseline',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'Bi-LSTM', 'NLP', 'IMDb', 'Binary Classification'],
    github: 'https://github.com/ANJANA-K-HUB/Deep-Learning-Project',
  },
  satellite: {
    icon: '🛰️',
    badge: 'Remote Sensing',
    title: 'Satellite Image Classification',
    objective: 'To classify land use and land cover types from satellite imagery, identifying urban areas, forests, water bodies, and agricultural zones using deep learning.',
    about: 'Satellite image classification is a key task in remote sensing and geospatial analysis with applications in urban planning, environmental monitoring, and agriculture. This project builds a CNN that learns to distinguish land cover types from multi-spectral satellite imagery, enabling automated large-scale geographic analysis.',
    approach: [
      'Processed a satellite imagery dataset with multiple land cover class labels',
      'Handled image preprocessing including normalisation and patch extraction',
      'Built a CNN model designed for multi-class land cover classification',
      'Applied data augmentation to handle geographic variation in training samples',
      'Evaluated classification performance per land cover type with detailed metrics',
      'Visualised model predictions overlaid on satellite image patches',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Remote Sensing', 'Geospatial Analysis'],
    github: 'https://github.com/ANJANA-K-HUB/Deep-Learning-Project',
  },
};

// ── Modal logic ──────────────────────────────────────────────────
const overlay   = document.getElementById('modalOverlay');
const closeBtn  = document.getElementById('modalClose');

function openModal(key) {
  const p = PROJECTS[key];
  if (!p) return;

  document.getElementById('modalIcon').textContent      = p.icon;
  document.getElementById('modalBadge').textContent     = p.badge;
  document.getElementById('modalTitle').textContent     = p.title;
  document.getElementById('modalObjective').textContent = p.objective;
  document.getElementById('modalAbout').textContent     = p.about;

  const list = document.getElementById('modalApproach');
  list.innerHTML = p.approach.map(s => `<li>${s}</li>`).join('');

  const tags = document.getElementById('modalTags');
  tags.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const gh = document.getElementById('modalGithub');
  gh.href = p.github;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Keyboard accessibility on cards
document.querySelectorAll('.project-card[tabindex]').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') card.click();
  });
});

// ── Certificate lightbox ─────────────────────────────────────────
const lightbox      = document.getElementById('certLightbox');
const lightboxImg   = document.getElementById('certLightboxImg');
const lightboxClose = document.getElementById('certLightboxClose');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    if (!img) return; // no image yet — placeholder showing
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
});
