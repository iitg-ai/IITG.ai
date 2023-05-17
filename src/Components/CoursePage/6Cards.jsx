import React from "react";
import Card from "../Landing/Card";
import WeekDescCard from "./WeekDescCard";
import Hackathon1 from "../../Images/Hackathon1.svg";
import Hackathon2 from "../../Images/Hackathon2.svg";

const CourseCards = () => {
  return (
    <div className="lg:mx-20 mx-6">
      <Card
        className=""
        flag={0}
        anchor="Course Outline"
        heading="How is the course structured?"
        description="The 7 week course takes you from basic Python to complex neural networks. The course is structured  as follows:"      />
      <div className="mt-8 max-lg:hidden">
        <div className="flex justify-between h-64">
          <WeekDescCard
            tag1="Python"
            tag2="Data Manipulation"
            tag3="Data Visaualization"
            whichWeek="Week 1"
            description="This week covers basics of Python, and very essential libraries like Numpy (for efficient numerical computation), Pandas (for data processing), Matplotlib (for data visualization). "
          />
          <WeekDescCard
            tag1="Supervised Learning"
            tag2="Model Performace"
            tag3="Model Optimization"
            whichWeek="Week 2"
            description="This week familiarises you with Machine Learning basics, and covers basic ML concepts like Linear Regression, Logistic Regression, Regularization, Naïve Bayes, Evaluation Metrics and more. It also covers a machine learning library, Sklearn."
          />
          <WeekDescCard
            tag1="Advanced ML"
            tag2="Unsupervised Learning"
            tag3="Ensemble Learning"
            whichWeek="Week 3"
            description="This week covers various important ML algorithms like SVM, KMeans, KNN and also familiarises you with unsupervised clustering, PCA(Principal Component Analysis). It will also cover Important topics like Ensemble Learning. "
          />
          <img src={Hackathon1} />
        </div>
        <div className="mt-6 mx-52">
          <div className="flex justify-between w-full h-64">
            <WeekDescCard
              tag1="EDA"
              tag2="Real World Data"
              tag3="Kaggle"
              whichWeek="Week 5"
              description="This week covers certain topics which are very important from hackathon POV and dealing with real world data like EDA (Exploratory Data Analysis), Feature Engineering, Outlier and Missing Value Handling, Applications of Boosting algorithms like XGBoost, CatBoost and LightGBM and many more. "
            />
            <WeekDescCard
              tag1="Gradient Descent"
              tag2="Activation Functions"
              tag3="Backpropagation"
              whichWeek="Week 6"
              description="This week, you will start your journey into neural networks and deep learning. You will start by learning about the fundamentals of neural networks. You will explore concepts such as activation functions and backpropagation."
            />
            <img src={Hackathon2} />
          </div>
        </div>
      </div>
      <div className="[&>*]:mt-6 flex flex-col lg:hidden">
        <WeekDescCard
          tag1="Python"
          tag2="Data Manipulation"
          tag3="Data Visaualization"
          whichWeek="Week 1"
          description="This week covers basics of Python, and very essential libraries like Numpy (for efficient numerical computation), Pandas (for data processing), Matplotlib (for data visualization). "
        />
        <WeekDescCard
          tag1="Supervised Learning"
          tag2="Model Performace"
          tag3="Model Optimization"
          whichWeek="Week 2"
          description="This week familiarises you with Machine Learning basics, and covers basic ML concepts like Linear Regression, Logistic Regression, Regularization, Naïve Bayes, Evaluation Metrics and more. It also covers a machine learning library, Sklearn."
        />
        <WeekDescCard
          tag1="Advanced ML"
          tag2="Unsupervised Learning"
          tag3="Ensemble Learning"
          whichWeek="Week 3"
          description="This week covers various important ML algorithms like SVM, KMeans, KNN and also familiarises you with unsupervised clustering, PCA(Principal Component Analysis). It will also cover Important topics like Ensemble Learning. "
        />
        <div className="self-center ">
          <img src={Hackathon1} alt="hackathon-1" className="rotate-90 scale-[2]" />
        </div>

        <WeekDescCard
          tag1="EDA"
          tag2="Real World Data"
          tag3="Kaggle"
          whichWeek="Week 5"
          description="This week covers certain topics which are very important from hackathon POV and dealing with real world data like EDA (Exploratory Data Analysis), Feature Engineering, Outlier and Missing Value Handling, Applications of Boosting algorithms like XGBoost, CatBoost and LightGBM and many more. "
        />
        <WeekDescCard
          tag1="Gradient Descent"
          tag2="Activation Functions"
          tag3="Backpropagation"
          whichWeek="Week 6"
          description="This week, you will start your journey into neural networks and deep learning. You will start by learning about the fundamentals of neural networks. You will explore concepts such as activation functions and backpropagation."
        />
        <div className="self-center scale-[2]">
          <img src={Hackathon2} alt="hackathon-1" className="rotate-90 " />
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
