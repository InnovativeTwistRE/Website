# Concierge Page Product Requirements Document (PRD)
Version: 1.0

> This document is additive and does not replace any previously generated architecture or product specification.

---

# Purpose

The Concierge page explains how Innovative Twist Real Estate helps clients prepare, improve, repair, and present properties through a coordinated network of trusted service providers.

The experience should reduce overwhelm by giving clients one clear point of contact instead of requiring them to manage multiple vendors independently.

---

# Primary Goals

- Explain the concierge service clearly
- Build confidence in the preparation process
- Generate consultation requests
- Support sellers, buyers, landlords, and homeowners
- Introduce financing or pay-at-closing options when applicable
- Connect users to trusted vendors

---

# Primary Audiences

## Sellers
Need help preparing a property for market.

## Buyers
Need repair, renovation, moving, or setup support after purchase.

## Property Owners
Need maintenance, turnover, or improvement coordination.

## Homeowners
Need reliable ongoing service providers.

---

# Page Structure

1. Hero
2. What Concierge Means
3. Who It Helps
4. Services
5. How It Works
6. Financing and Payment Options
7. Trusted Vendor Standards
8. Before-and-After Examples
9. FAQs
10. Consultation CTA
11. Footer

---

# Hero

Headline:
One Call. One Plan. One Trusted Team.

Supporting Copy:
We coordinate the people, services, and details needed to prepare, improve, and protect your property.

Primary CTA:
Request a Concierge Consultation

Secondary CTA:
Explore Available Services

---

# Service Categories

- Painting
- Flooring
- Cleaning
- Landscaping
- Repairs
- Moving
- Storage
- Staging
- Photography Preparation
- Renovation Coordination
- Handyman Services
- HVAC
- Plumbing
- Electrical
- Roofing
- Pest Control
- Junk Removal

---

# How It Works

1. Consultation
2. Property Review
3. Recommended Scope
4. Vendor Coordination
5. Client Approval
6. Work Completion
7. Final Quality Review

---

# Functional Requirements

- Service category directory
- Consultation request form
- Property address capture
- Photo upload
- Project urgency selection
- Preferred contact method
- Vendor assignment workflow
- Status updates
- Document upload
- Estimate tracking

---

# User Stories

- As a seller, I want one person to coordinate repairs before listing.
- As a homeowner, I want access to trusted vendors.
- As a landlord, I want turnover work tracked in one place.
- As an administrator, I want to assign vendors and monitor project status.

---

# Data Requirements

Entities:
- Concierge Request
- Property
- Contact
- Vendor
- Service Category
- Estimate
- Project
- Project Task
- Project Document
- Project Status

---

# Integrations

- CRM
- Calendar
- File Storage
- Property Records
- Email and SMS
- Payment or financing provider
- Vendor management system

---

# Automation

On consultation form submission:

1. Create or update contact
2. Create concierge request
3. Attach property
4. Assign service pipeline
5. Notify internal team
6. Send confirmation
7. Create follow-up task
8. Request photos when missing

---

# AI Features

AI may:

- Summarize client requests
- Categorize service needs
- Create an initial project checklist
- Draft vendor scope descriptions
- Generate homeowner-friendly progress summaries

AI may not approve pricing, authorize work, or change vendor agreements.

---

# Permissions

Public users:
- Submit requests

Clients:
- View their own requests, estimates, documents, and updates

Vendors:
- View assigned project details only

Team members:
- Manage assigned projects

Admins:
- Full access

---

# Analytics

Track:

- Consultation submissions
- Service category engagement
- Photo uploads
- Estimate approvals
- Project conversion rate
- Average time to assignment
- Average time to completion

---

# Accessibility

- WCAG AA
- Accessible upload controls
- Keyboard-operable accordions and forms
- Plain-language status labels
- Screen-reader-compatible progress indicators

---

# Acceptance Criteria

- All forms connect to the CRM and concierge workflow
- Requests can be linked to properties and clients
- Uploaded files follow file-storage rules
- Status changes generate audit entries
- Page is responsive and CMS editable
- Client and vendor access is permission-controlled
