import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [url, setUrl] = useState("");
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  // Debug effect to check when chartData changes
  useEffect(() => {
    if (chartData) {
      console.log("Chart data updated:", chartData);
    }
  }, [chartData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowDemo(false);

    try {
      const response = await axios.post("http://localhost:5001/analyze", {
        url
      });

      console.log("Backend Response:", response.data);
      const { genuine, fake } = response.data;

      // Ensure we have numeric values
      const genuineValue = parseFloat(genuine) || 0;
      const fakeValue = parseFloat(fake) || 0;

      if (genuineValue === 0 && fakeValue === 0) {
        setError("No valid data received from the server");
        setChartData(null);
        return;
      }

      // Create chart data object
      setChartData({
        labels: ["Genuine", "Fake"],
        datasets: [
          {
            data: [genuineValue, fakeValue],
            backgroundColor: ["#10B981", "#EF4444"],
            borderColor: ["#059669", "#DC2626"],
            borderWidth: 1
          }
        ]
      });
    } catch (error) {
      setError(
        "Failed to analyze reviews. Please check the URL and try again."
      );
      console.error("Error analyzing reviews:", error);
      setChartData(null);
    } finally {
      setLoading(false);
    }
  };

  // Test function with sample data
  const testChart = () => {
    setShowDemo(true);
    setChartData({
      labels: ["Genuine", "Fake"],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["#10B981", "#EF4444"],
          borderColor: ["#059669", "#DC2626"],
          borderWidth: 1
        }
      ]
    });
  };

  return (
    <div className="min-h-screen bg-[#111929]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            <span className="text-blue-400">Veritas</span>Guard
          </h1>
          <p className="text-gray-400 text-lg">
            Advanced Fake Review Detection System
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-800">
          <div className="md:flex">
            {/* Left Panel - Input Form */}
            <div className="md:w-1/2 p-8 border-r border-gray-800">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Analyze Product Reviews
                </h2>
                <p className="text-gray-400">
                  Enter a product URL to detect genuine vs fake reviews
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Product URL
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://www.amazon.com/product/..."
                      className="block w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Works with Amazon and Flipkart product pages
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center w-2/3 px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 disabled:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        Analyze Reviews
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={testChart}
                    className="flex items-center justify-center w-1/3 px-4 py-3 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                  >
                    Demo
                  </button>
                </div>
              </form>

              {error && (
                <div className="mt-4 bg-red-900/30 border-l-4 border-red-500 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-400">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* How it works section */}
              <div className="mt-8 border-t border-gray-800 pt-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How It Works
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-400 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-400">
                      AI analyzes review patterns and language
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-400 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-400">
                      Detects suspicious review behavior
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-blue-400 mr-2 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-400">
                      Shows percentage of genuine vs fake reviews
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Panel - Results */}
            <div className="md:w-1/2 bg-gray-800 p-8">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {showDemo ? "Demo Results" : "Analysis Results"}
                </h2>
                <p className="text-gray-400 mb-6">
                  {chartData
                    ? "Review authenticity breakdown for this product"
                    : "Enter a product URL and click 'Analyze Reviews' to see results"}
                </p>

                {chartData ? (
                  <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="w-64 h-64">
                      <Pie
                        data={chartData}
                        options={{
                          responsive: true,
                          maintainAspectRatio: true,
                          plugins: {
                            legend: {
                              position: "bottom",
                              labels: {
                                color: "rgba(255, 255, 255, 0.8)",
                                font: {
                                  size: 14
                                },
                                padding: 20
                              }
                            },
                            tooltip: {
                              callbacks: {
                                label: function (context) {
                                  const label = context.label || "";
                                  const value = context.raw || 0;
                                  const total = context.dataset.data.reduce(
                                    (a, b) => a + b,
                                    0
                                  );
                                  const percentage = (
                                    (value / total) *
                                    100
                                  ).toFixed(1);
                                  return `${label}: ${percentage}% (${value})`;
                                }
                              }
                            }
                          }
                        }}
                      />
                    </div>

                    <div className="mt-8 w-full">
                      <div className="bg-gray-900 rounded-lg border border-gray-700 p-4 shadow-md">
                        <h3 className="font-semibold text-white mb-2">
                          Analysis Summary
                        </h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300">
                                Genuine
                              </span>
                            </div>
                            <div className="text-xl font-bold text-white mt-1">
                              {(
                                (chartData.datasets[0].data[0] /
                                  (chartData.datasets[0].data[0] +
                                    chartData.datasets[0].data[1])) *
                                100
                              ).toFixed(1)}
                              %
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-400">
                              Reliability Score
                            </div>
                            <div className="text-2xl font-bold text-blue-400 mt-1">
                              {Math.round(
                                (chartData.datasets[0].data[0] /
                                  (chartData.datasets[0].data[0] +
                                    chartData.datasets[0].data[1])) *
                                  100
                              )}
                              <span className="text-lg">/100</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-sm text-gray-300">
                                Fake
                              </span>
                            </div>
                            <div className="text-xl font-bold text-white mt-1">
                              {(
                                (chartData.datasets[0].data[1] /
                                  (chartData.datasets[0].data[0] +
                                    chartData.datasets[0].data[1])) *
                                100
                              ).toFixed(1)}
                              %
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                    <div className="bg-blue-500/10 rounded-full p-6 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300">
                      No analysis data to display yet.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Enter a product URL and analyze to see results or click
                      "Demo" for a sample.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 VeritasGuard | AI-Powered Fake Review Detection</p>
        </div>
      </div>
    </div>
  );
}

export default App;
