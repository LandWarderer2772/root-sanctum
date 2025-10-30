# Machine Learning Basics

Machine learning enables computers to learn from data without explicit programming.

## Core Concepts

### Supervised Learning

**Definition**: Supervised learning is a machine learning paradigm where algorithms learn from labeled training data to predict outcomes for new, unseen data. The "supervision" comes from the labeled examples that guide the learning process.

**Key Concepts**:
- **Training Data**: Dataset with input-output pairs (features and labels)
- **Model**: Mathematical function that maps inputs to outputs
- **Loss Function**: Measures how well predictions match actual labels
- **Optimization**: Process of adjusting model parameters to minimize loss

**Common Applications**:
- Email spam classification
- Price prediction for real estate
- Medical diagnosis from symptoms
- Credit score assessment

**Example**:

> **Housing Price Prediction**
> 
> Imagine training a model to predict house prices based on features like size, location, and number of bedrooms. You provide the algorithm with historical data of 10,000 houses with their actual sale prices.
> 
> **Input Features**:
> - Square footage: 2,000 sq ft
> - Bedrooms: 3
> - Location: Urban area
> - Age: 10 years
> 
> **Output Label**: $350,000
> 
> **Key Points**:
> - The model learns patterns between features and prices
> - After training, it can predict prices for new houses it hasn't seen
> - Accuracy improves with more quality training data

**Analysis**: The algorithm identifies patterns such as "larger houses typically cost more" and "urban locations command premium prices." Once trained, it generalizes these patterns to predict prices for new listings, making it invaluable for real estate valuation.

::: tip Pro Tip
Start with simple models like linear regression before moving to complex ones. Often, simpler models perform better with limited data and are easier to interpret.
:::

### Unsupervised Learning

**Definition**: Unsupervised learning algorithms discover hidden patterns and structures in unlabeled data without predetermined outcomes. The algorithm explores the data independently to find meaningful groupings or representations.

**Key Concepts**:
- **Clustering**: Grouping similar data points together
- **Dimensionality Reduction**: Simplifying data while preserving important information
- **Anomaly Detection**: Identifying unusual patterns that don't fit expected behavior
- **Association Rules**: Finding relationships between variables

**Common Applications**:
- Customer segmentation for marketing
- Anomaly detection in cybersecurity
- Recommendation systems
- Data compression and visualization

**Example**:

> **Customer Segmentation**
> 
> An e-commerce company has data on 50,000 customers including purchase history, browsing behavior, and demographics, but no predefined categories. They use clustering to discover natural customer groups.
> 
> **Discovered Segments**:
> - **Budget Shoppers**: Frequent buyers of discounted items, price-sensitive
> - **Premium Customers**: High-value purchases, brand-conscious
> - **Occasional Buyers**: Infrequent visits, seasonal purchases
> - **Window Shoppers**: High browsing, low conversion
> 
> **Key Points**:
> - No predefined labels were provided
> - Algorithm found patterns based on behavioral similarities
> - Each segment can receive targeted marketing strategies

**Analysis**: The clustering algorithm identified distinct shopping patterns that weren't explicitly programmed. This enables the company to create personalized marketing campaigns, optimize inventory for different segments, and improve customer retention through targeted experiences.

::: warning Important
Unsupervised learning results can be subjective and require domain expertise to interpret. Always validate discovered patterns with business knowledge and A/B testing.
:::

### Model Training and Evaluation

**Definition**: Model training is the process of optimizing an algorithm's parameters using data, while evaluation measures how well the trained model performs on new, unseen data to ensure it generalizes beyond the training set.

**Key Concepts**:
- **Training Set**: Data used to teach the model (typically 60-80% of total data)
- **Validation Set**: Data used to tune hyperparameters (10-20%)
- **Test Set**: Data used for final performance evaluation (10-20%)
- **Overfitting**: Model memorizes training data but fails on new data
- **Underfitting**: Model is too simple to capture data patterns

**Common Applications**:
- Model selection and comparison
- Hyperparameter tuning
- Performance benchmarking
- Deployment readiness assessment

**Example**:

> **Email Spam Classifier Evaluation**
> 
> You've trained a spam classifier on 10,000 emails (8,000 training, 2,000 test). The model needs evaluation before deployment.
> 
> **Performance Metrics**:
> - **Accuracy**: 95% (correctly classified emails)
> - **Precision**: 92% (of emails marked spam, 92% were actually spam)
> - **Recall**: 88% (of actual spam emails, 88% were caught)
> - **F1-Score**: 90% (harmonic mean of precision and recall)
> 
> **Confusion Matrix**:
> ```
>                 Predicted
>              Spam    Ham
> Actual Spam   880    120
>        Ham     76   1924
> ```
> 
> **Key Points**:
> - Different metrics matter for different use cases
> - Missing spam (false negatives) vs. blocking legitimate emails (false positives)
> - Trade-offs between precision and recall based on business requirements

**Analysis**: While 95% accuracy sounds good, the 12% miss rate for spam (120 out of 1,000) might be unacceptable for users. Conversely, marking 76 legitimate emails as spam could frustrate users. The evaluation helps decide if the model needs retraining, more data, or adjusting the decision threshold based on business priorities.

::: danger Caution
Never evaluate your model on the training data alone. This will give artificially high performance scores and won't reveal how the model performs in real-world scenarios. Always maintain a separate test set.
:::

## Evaluation Metrics Comparison

| Metric | What It Measures | When to Prioritize | Formula |
|--------|------------------|-------------------|---------|
| Accuracy | Overall correctness | Balanced datasets | (TP + TN) / Total |
| Precision | Quality of positive predictions | When false positives are costly | TP / (TP + FP) |
| Recall | Coverage of actual positives | When false negatives are costly | TP / (TP + FN) |
| F1-Score | Balance of precision & recall | When you need both | 2 × (P × R) / (P + R) |

## Key Takeaways

- **Supervised learning** requires labeled data but provides clear, measurable outcomes
- **Unsupervised learning** discovers hidden patterns without predefined categories
- **Proper evaluation** is critical to ensure models work in production environments
- **No single metric** tells the whole story—use multiple measures to assess model quality

---

[Back to AI & Machine Learning](./index.md)
