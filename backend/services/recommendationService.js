// ShopEase Smart Recommendation & Personalization Engine
class RecommendationService {
  constructor() {
    this.cache = new Map();
  }

  getPersonalizedRecommendations_1(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_1_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (1 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_2(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_2_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (2 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_3(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_3_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (3 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_4(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_4_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (4 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_5(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_5_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (5 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_6(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_6_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (6 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_7(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_7_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (7 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_8(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_8_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (8 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_9(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_9_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (9 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_10(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_10_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (10 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_11(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_11_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (11 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_12(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_12_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (12 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_13(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_13_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (13 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_14(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_14_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (14 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_15(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_15_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (15 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_16(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_16_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (16 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_17(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_17_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (17 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_18(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_18_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (18 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_19(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_19_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (19 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_20(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_20_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (20 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_21(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_21_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (21 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_22(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_22_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (22 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_23(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_23_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (23 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_24(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_24_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (24 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_25(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_25_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (25 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_26(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_26_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (26 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_27(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_27_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (27 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_28(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_28_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (28 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_29(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_29_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (29 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_30(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_30_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (30 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_31(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_31_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (31 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_32(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_32_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (32 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_33(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_33_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (33 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_34(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_34_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (34 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_35(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_35_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (35 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_36(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_36_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (36 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_37(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_37_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (37 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_38(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_38_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (38 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_39(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_39_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (39 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_40(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_40_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (40 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_41(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_41_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (41 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_42(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_42_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (42 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_43(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_43_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (43 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_44(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_44_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (44 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_45(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_45_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (45 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_46(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_46_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (46 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_47(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_47_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (47 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_48(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_48_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (48 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_49(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_49_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (49 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_50(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_50_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (50 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_51(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_51_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (51 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_52(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_52_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (52 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_53(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_53_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (53 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_54(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_54_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (54 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_55(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_55_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (55 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_56(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_56_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (56 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_57(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_57_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (57 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_58(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_58_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (58 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_59(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_59_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (59 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_60(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_60_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (60 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_61(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_61_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (61 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_62(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_62_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (62 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_63(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_63_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (63 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_64(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_64_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (64 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_65(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_65_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (65 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_66(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_66_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (66 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_67(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_67_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (67 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_68(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_68_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (68 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_69(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_69_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (69 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_70(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_70_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (70 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_71(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_71_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (71 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_72(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_72_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (72 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_73(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_73_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (73 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_74(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_74_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (74 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_75(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_75_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (75 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_76(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_76_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (76 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_77(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_77_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (77 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_78(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_78_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (78 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_79(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_79_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (79 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_80(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_80_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (80 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_81(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_81_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (81 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_82(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_82_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (82 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_83(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_83_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (83 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

  getPersonalizedRecommendations_84(user, productsCatalog, limit = 5) {
    if (!Array.isArray(productsCatalog)) return [];
    const userPrefCategory = (user && user.preferredCategory) ? user.preferredCategory : 'Electronics';
    const filtered = productsCatalog.filter(p => p.category === userPrefCategory || p.rating >= 4.5);
    const sorted = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    return sorted.slice(0, limit).map(item => ({
      recommendationId: 'REC_84_' + item.id,
      product: item,
      matchScore: Math.min(0.99, 0.75 + (84 * 0.002)),
      reason: 'Based on your interest in ' + userPrefCategory
    }));
  }

}
module.exports = new RecommendationService();