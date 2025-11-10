 🏪 Customer Segmentation using K-Means Clustering

📖 Project Overview
Imagine a crowded shopping mall filled with different kinds of customers — families, students, professionals, and trend-seekers.  
Each customer shops differently — some spend big, some browse, and some look for deals.  

This project uses *K-Means Clustering* to segment mall customers based on their *Annual Income* and *Spending Score*, helping businesses understand consumer behavior and make data-driven marketing decisions.


 🎯 Objective
To identify and visualize distinct customer groups using clustering techniques, allowing the mall management to:
- Personalize marketing strategies  
- Design better offers for each group  
- Improve customer satisfaction  

 🧩 Dataset
The dataset contains information about customers visiting the mall.  
| Feature | Description |
| CustomerID | Unique ID for each customer |
| Gender | Male/Female |
| Age | Age of the customer |
| Annual Income (k$) | Estimated annual income |
| Spending Score (1–100) | Score assigned based on spending behavior |



⚙ Methodology

# Step 1: Data Preprocessing
- Cleaned and prepared data for clustering  
- Selected relevant features: Annual Income and Spending Score

# Step 2: Finding Optimal Clusters
- Used the Elbow Method to find the best value of K  
- Optimal number of clusters found: K = 5

# Step 3: Applying K-Means
- Implemented K-Means algorithm to group similar customers  


🧠 Insights from Clusters
| Cluster | Description | Example Behavior |

| 👑 *Luxury Lovers* | High income, high spending | Prefer premium brands |
| 💼 *Potential Buyers* | High income, low spending | Spend cautiously |
| 😊 *Regular Shoppers* | Average income and spending | Consistent visitors |
| 🛍 *Budget Savers* | Low income, low spending | Price-conscious |
| 🎉 *Young Spenders* | Low income, high spending | Trend-driven youth |


📊 Live Dashboard
We created an *interactive dashboard* showcasing:
- Cluster visualizations  
- Average income and spending score per cluster  
- Insights for targeted business strategies  

The dashboard helps mall management *see patterns in real time* and make smarter, data-driven decisions.


🧮 Technologies Used
-tailwind css
- next.js
- Python 
- Pandas & NumPy for data handling  
- Matplotlib & Seaborn for visualization  
- Scikit-learn for implementing K-Means  

💡 Conclusion
K-Means Clustering transformed a chaotic mall crowd into *five clear customer segments*.  
By understanding each group’s behavior, the mall can now tailor its marketing, pricing, and product placement effectively.  
This is how data turns *observation into opportunity.

👩‍💻 Team Members
- Prathyusha Reddy
- Reeena Akshaya
- Shreya Keshri
- Bhavya Khare
- Sima Kumari

-  📅 Project Category
Machine Learning | Customer Segmentation | Data Analytics

> “From chaos to clarity — data helps us see people, not just numbers.”











































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# dhv_prathyusha-team
# dhv_project_prathyusha-and-team
