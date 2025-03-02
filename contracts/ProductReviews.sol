// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductReviews {
    struct Review {
        string userId; // Store userId as a string
        uint256 rating;
        string reviewText;
        uint256 timestamp;
    }

    // Mapping from productId to its reviews
    mapping(uint256 => Review[]) public productReviews;

    // Event to log new reviews
    event ReviewAdded(
        uint256 productId,
        string userId,
        uint256 rating,
        string reviewText,
        uint256 timestamp
    );

    // Function to add a review (called by the merchant site)
    function addReview(
        uint256 _productId,
        string memory _userId,
        uint256 _rating,
        string memory _reviewText,
        uint256 _timestamp
    ) public {
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");
        require(bytes(_reviewText).length > 0, "Review text cannot be empty");
        require(_timestamp > 0, "Invalid timestamp");

        productReviews[_productId].push(
            Review({
                userId: _userId,
                rating: _rating,
                reviewText: _reviewText,
                timestamp: _timestamp
            })
        );

        emit ReviewAdded(_productId, _userId, _rating, _reviewText, _timestamp);
    }

    // Function to fetch reviews for a product
    function getReviews(uint256 _productId) public view returns (Review[] memory) {
        return productReviews[_productId];
    }
}