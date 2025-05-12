"""
Minimum Variance Portfolio (MVP) Calculation for Three Assets
-------------------------------------------------------------

This Python script calculates the Minimum Variance Portfolio (MVP) weights
for a portfolio consisting of three assets. The MVP minimizes the overall
portfolio variance (risk), given the covariance between the asset returns.

Key Steps:
1. Inputs:
    - Expected returns (not directly used in MVP calculation but displayed for reference).
    - Covariance matrix of the asset returns.

2. Process:
    - Inverts the covariance matrix to get Σ⁻¹.
    - Computes the weights of the assets that minimize the portfolio variance,
      under the constraint that all portfolio weights sum to 1.
    - Calculates the resulting minimum portfolio variance and its standard deviation.

3. Outputs:
    - Weights of each asset in the MVP.
    - Minimum portfolio variance.
    - Minimum portfolio risk (standard deviation).

"""

import numpy as np


def print_matrix(matrix, name):
    """
    Helper function to print a matrix with a given name label.
    """
    print(f"\n{name}:")
    print(np.array_str(matrix, precision=4, suppress_small=True))


# ------------------------------------
# 1. Define the inputs
# ------------------------------------

# Expected returns for three assets (not directly used in MVP formula)
expected_returns = np.array([0.08, 0.11, 0.14])  # 8%, 11%, and 14%

# Covariance matrix of the asset returns
# It shows the variance of each asset on the diagonal and covariances off-diagonal
cov_matrix = np.array(
    [
        [0.025, 0.010, 0.005],  # Asset 1 variances & covariances
        [0.010, 0.040, 0.015],  # Asset 2 variances & covariances
        [0.005, 0.015, 0.090],  # Asset 3 variances & covariances
    ]
)

# ------------------------------------
# 2. Display the inputs
# ------------------------------------
print("Minimum Variance Portfolio (MVP) for Three Assets")
print("-" * 60)

# Display expected returns for reference
print("Expected Returns (given, not directly used in MVP calc):")
for i, ret in enumerate(expected_returns, 1):
    print(f"  Asset {i}: {ret * 100:.2f}%")

# Display the covariance matrix
print_matrix(cov_matrix, "Covariance Matrix (Σ)")


# ------------------------------------
# 3. Compute the inverse of the covariance matrix Σ⁻¹
# ------------------------------------
# Inversion is required for the MVP weight formula
inv_cov_matrix = np.linalg.inv(cov_matrix)
print_matrix(inv_cov_matrix, "Inverse of Covariance Matrix (Σ⁻¹)")


# ------------------------------------
# 4. Create a vector of ones
# ------------------------------------
# This represents the constraint: sum of weights = 1 (fully invested portfolio)
ones = np.ones(len(expected_returns))
print(f"\nVector of Ones (1s): {ones}")


# ------------------------------------
# 5. Compute MVP weights using the formula:
#     w = Σ⁻¹ * 1 / (1' * Σ⁻¹ * 1)
# ------------------------------------
# Step 1: Numerator (Σ⁻¹ * 1)
numerator = inv_cov_matrix @ ones

# Step 2: Denominator (1' * Σ⁻¹ * 1)
denominator = ones @ inv_cov_matrix @ ones

# Final weights calculation (element-wise division)
weights = numerator / denominator


# ------------------------------------
# 6. Output the calculated weights
# ------------------------------------
print("\n--- Results ---")
for i, w in enumerate(weights, 1):
    print(f"Weight of Asset {i}: {w:.4f} ({w * 100:.2f}%)")
# The weights sum to 1 and represent the proportion of investment in each asset


# ------------------------------------
# 7. Compute Minimum Portfolio Variance and Standard Deviation (Risk)
# ------------------------------------
# Portfolio variance = w' * Σ * w
portfolio_variance = weights.T @ cov_matrix @ weights

# Standard deviation is the square root of variance
portfolio_std_dev = np.sqrt(portfolio_variance)

# Display the risk metrics
print(f"\nMinimum Portfolio Variance: {portfolio_variance:.6f}")
print(f"Minimum Portfolio Standard Deviation (Risk): {portfolio_std_dev:.4f}")


# ------------------------------------
# 8. End of Calculation
# ------------------------------------
print("\n--- End of Calculation ---")
