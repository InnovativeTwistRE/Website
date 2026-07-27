# Database Architecture
Version: 1.0

## Purpose

This document defines the shared data architecture for the Innovative Twist Real Estate Platform.

The database must support:

- public website workflows
- lead generation
- investor tools
- property analysis
- homeowner services
- property wealth management
- concierge services
- reports
- documents
- automation
- AI features
- future mobile applications

The system must use a shared source of truth.

A property, user, report, analysis, or document should not be duplicated across separate modules unless there is a documented business reason.

---

# Core Principles

## Single Source of Truth

Each major business object should have one authoritative record.

Examples:

- one primary user record
- one primary property record
- one analysis record per saved scenario
- one document record per uploaded file
- one report record per generated report
- one task record per required action

## Shared Data

All authorized modules should use the same underlying data.

A property entered in the Investor Dashboard should be available to:

- PropertyOS™
- HomeownerOS™
- InvestorOS™
- ConciergeOS™
- AIOS™
- reporting
- automation

## Auditability

Important changes must be traceable.

Track:

- who made the change
- what changed
- when it changed
- the previous value
- the new value
- the source of the change

## Security

Use role-based permissions and least-privilege access.

Sensitive documents and financial records must never be publicly accessible.

## Versioning

Financial formulas, reports, legal documents, and critical workflows must support versioning.

---

# Recommended Database Style

Use a relational database as the primary source of truth.

Recommended:

- PostgreSQL

Use object storage for:

- documents
- images
- reports
- inspection photos
- signed forms
- property media

Use a queue or job system for:

- report generation
- AI processing
- notifications
- integrations
- scheduled reviews
- data imports

---

# Primary Entities

The core data model includes:

- User
- Organization
- Role
- Permission
- Contact
- Lead
- Property
- PropertyOwnership
- PropertyFinancials
- PropertyValuation
- PropertyPhoto
- Portfolio
- PortfolioProperty
- InvestorProfile
- Analysis
- Scenario
- CalculationResult
- Report
- Document
- DocumentVersion
- Task
- Notification
- Activity
- Goal
- Inspection
- InspectionItem
- MaintenanceRecord
- Vendor
- Project
- Lease
- Tenant
- PropertyOwner
- Communication
- CRMEvent
- IntegrationConnection
- AuditLog

---

# User

Represents a person who can authenticate.

Suggested fields:

- id
- first_name
- last_name
- email
- phone
- password_hash or auth_provider_id
- status
- preferred_name
- timezone
- locale
- profile_photo_url
- created_at
- updated_at
- last_login_at

User status values (matches Account Status Values in canonical-reference.md exactly):

- invited
- pending_verification
- active
- suspended
- locked
- archived

Do not store raw passwords.

---

# Organization

Represents a company, team, brokerage, vendor company, or future white-label account.

Suggested fields:

- id
- name
- organization_type
- parent_organization_id
- logo_url
- website_url
- phone
- email
- address
- status
- created_at
- updated_at

Organization types may include:

- brokerage
- real_estate_team
- property_management_company
- vendor_company
- investor_company
- platform_owner

---

# Role

Represents a named access level.

Examples:

- visitor
- registered_consumer
- buyer
- seller
- renter
- homeowner
- investor
- property_owner
- tenant
- agent
- property_manager
- admin
- owner

`owner` corresponds to the canonical role "Joshua (owner)" in canonical-reference.md.

Suggested fields:

- id
- name
- description
- organization_id
- created_at
- updated_at

---

# Permission

Represents a specific action that can be granted.

Examples:

- property.read
- property.create
- property.update
- property.delete
- analysis.run
- report.generate
- report.download
- document.upload
- document.view_private
- tenant.view
- owner.view
- inspection.manage
- project.manage
- admin.manage_users

Use role-permission mapping tables.

---

# Contact

Represents a CRM contact whether or not the person has a user account.

Suggested fields:

- id
- user_id
- first_name
- last_name
- email
- phone
- contact_type
- source
- assigned_to_user_id
- lifecycle_stage
- notes
- created_at
- updated_at

Contact types may include:

- buyer
- seller
- renter
- investor
- owner
- tenant
- vendor
- agent
- partner

---

# Lead

Represents an opportunity or active inquiry.

Suggested fields:

- id
- contact_id
- lead_type
- source
- campaign
- status
- priority
- score
- assigned_to_user_id
- property_id
- next_action_at
- last_contacted_at
- created_at
- updated_at

Lead types (matches Lead Types in canonical-reference.md exactly):

- buyer
- seller
- rental
- investor
- property_management
- concierge
- homeowner_service
- media

Lead status:

- new
- contacted
- qualified
- active
- nurturing
- converted
- lost
- archived

---

# Property

The Property entity is one of the most important shared objects in the platform.

Suggested fields:

- id
- external_id
- mls_id
- address_line_1
- address_line_2
- city
- state
- postal_code
- county
- country
- latitude
- longitude
- property_type
- bedrooms
- bathrooms
- square_feet
- lot_size
- year_built
- stories
- parking_spaces
- occupancy_status
- management_status
- listing_status
- source
- created_at
- updated_at

Property types may include:

- single_family
- townhouse
- condominium
- duplex
- triplex
- fourplex
- multifamily
- commercial
- land
- mixed_use
- manufactured_home

Use normalized address data where possible.

Create duplicate-detection rules based on:

- normalized address
- parcel identifier
- MLS identifier
- latitude and longitude

---

# PropertyOwnership

Connects people or organizations to properties.

Suggested fields:

- id
- property_id
- owner_user_id
- owner_contact_id
- owner_organization_id
- ownership_percentage
- ownership_type
- start_date
- end_date
- is_primary
- created_at
- updated_at

Ownership types:

- individual
- joint
- trust
- LLC
- corporation
- partnership

---

# PropertyFinancials

Stores current property-level financial information.

Suggested fields:

- id
- property_id
- purchase_price
- purchase_date
- current_value
- loan_balance
- monthly_principal_interest
- interest_rate
- loan_term_months
- loan_start_date
- annual_property_taxes
- annual_insurance
- monthly_hoa
- monthly_rent
- vacancy_rate
- maintenance_rate
- management_rate
- utilities_monthly
- other_income_monthly
- other_expenses_monthly
- effective_date
- source
- created_at
- updated_at

Financial history should be preserved by effective date.

Do not overwrite historical values without creating a new record or version.

---

# PropertyValuation

Stores estimates or formal valuations.

Suggested fields:

- id
- property_id
- valuation_type
- amount
- low_estimate
- high_estimate
- valuation_date
- source
- confidence_score
- notes
- created_at
- updated_at

Valuation types:

- automated_estimate
- comparative_market_analysis
- appraisal
- owner_estimate
- purchase_price
- market_analysis

---

# PropertyPhoto

Suggested fields:

- id
- property_id
- storage_key
- file_name
- mime_type
- caption
- category
- sort_order
- is_primary
- uploaded_by_user_id
- created_at
- updated_at

Categories:

- exterior
- interior
- inspection
- maintenance
- before
- after
- listing
- document_photo

---

# InvestorProfile

Stores investor preferences and goals.

Suggested fields:

- id
- user_id
- experience_level
- available_cash
- target_monthly_cash_flow
- target_annual_return
- target_cap_rate
- target_cash_on_cash_return
- preferred_property_types
- preferred_markets
- preferred_strategies
- risk_tolerance
- financing_preferences
- time_horizon_years
- retirement_target_date
- passive_income_goal
- created_at
- updated_at

Experience levels:

- beginner
- intermediate
- advanced
- professional

---

# Portfolio

Represents a collection of owned or analyzed properties.

Suggested fields:

- id
- owner_user_id
- organization_id
- name
- description
- status
- base_currency
- created_at
- updated_at

---

# PortfolioProperty

Connects a property to a portfolio.

Suggested fields:

- id
- portfolio_id
- property_id
- acquisition_date
- acquisition_price
- ownership_percentage
- status
- exit_date
- exit_price
- created_at
- updated_at

Status values:

- prospect
- under_analysis
- under_contract
- owned
- selling
- sold
- archived

---

# Analysis

Represents a saved analysis session.

Suggested fields:

- id
- user_id
- property_id
- analysis_type
- name
- status
- formula_version
- input_snapshot
- result_snapshot
- source
- created_at
- updated_at
- completed_at

Analysis types:

- rental
- flip
- BRRRR
- house_hack
- short_term_rental
- long_term_rental
- multifamily
- commercial
- maximum_offer
- affordability
- equity_growth
- retirement
- portfolio_health

Use structured JSON for flexible input and output snapshots, but keep important searchable values in dedicated columns.

---

# Scenario

Represents a comparison within an analysis.

Examples:

- conservative
- expected
- aggressive
- financing option A
- financing option B
- self-managed
- professionally managed

Suggested fields:

- id
- analysis_id
- name
- description
- assumptions
- results
- sort_order
- created_at
- updated_at

---

# CalculationResult

Stores important calculated values separately from raw analysis snapshots.

Suggested fields:

- id
- analysis_id
- scenario_id
- metric_name
- metric_value
- unit
- formula_version
- warning_level
- explanation
- created_at

Metric examples:

- monthly_cash_flow
- annual_cash_flow
- NOI
- cap_rate
- cash_on_cash_return
- DSCR
- break_even_occupancy
- maximum_offer
- IT_wealth_score
- projected_equity

---

# Report

Represents a generated report.

Suggested fields:

- id
- user_id
- property_id
- analysis_id
- portfolio_id
- report_type
- title
- status
- template_version
- file_storage_key
- generated_at
- expires_at
- created_at
- updated_at

Report status:

- queued
- generating
- completed
- failed
- archived

---

# Document

Represents an uploaded or generated file.

Suggested fields:

- id
- owner_user_id
- property_id
- contact_id
- lease_id
- report_id
- document_type
- title
- status
- current_version_id
- visibility
- created_at
- updated_at

Document types may include:

- lease
- inspection
- disclosure
- application
- income_verification
- identification
- insurance
- tax
- mortgage
- repair_invoice
- vendor_quote
- report
- photo
- owner_form
- tenant_form

Visibility values:

- private
- property_team
- owner
- tenant
- client
- public

---

# DocumentVersion

Stores each file version.

Suggested fields:

- id
- document_id
- version_number
- storage_key
- file_name
- mime_type
- file_size
- checksum
- uploaded_by_user_id
- effective_date
- created_at

Never replace a legally significant document without preserving the previous version.

---

# Inspection

Suggested fields:

- id
- property_id
- inspection_type
- scheduled_at
- completed_at
- inspector_user_id
- inspector_contact_id
- status
- summary
- report_document_id
- created_at
- updated_at

Inspection types (matches Inspection Types in canonical-reference.md exactly):

- move_in
- move_out
- periodic
- annual
- pre_listing
- home_inspection
- maintenance
- safety
- renewal

---

# InspectionItem

Suggested fields:

- id
- inspection_id
- category
- room_or_area
- item_number
- condition
- finding
- requested_action
- contractor_type
- severity
- status
- due_date
- created_at
- updated_at

This structure supports the preferred detailed inspection format:

1. Plain-language explanation
2. Specific corrective action
3. Contractor type

---

# MaintenanceRecord

Suggested fields:

- id
- property_id
- title
- description
- category
- priority
- status
- reported_by_user_id
- assigned_vendor_id
- estimated_cost
- actual_cost
- reported_at
- scheduled_at
- completed_at
- created_at
- updated_at

Status:

- reported
- triaged
- approved
- scheduled
- in_progress
- completed
- canceled

---

# Vendor

Suggested fields:

- id
- organization_id
- contact_id
- business_name
- service_categories
- service_area
- license_number
- insurance_expiration
- status
- preferred
- rating
- notes
- created_at
- updated_at

---

# Project

Represents a repair, renovation, preparation, or concierge project.

Suggested fields:

- id
- property_id
- owner_user_id
- vendor_id
- title
- description
- project_type
- status
- budget
- estimated_cost
- actual_cost
- estimated_start_date
- actual_start_date
- estimated_completion_date
- actual_completion_date
- expected_value_increase
- expected_rent_increase
- created_at
- updated_at

---

# Lease

Suggested fields:

- id
- property_id
- owner_contact_id
- tenant_contact_id
- start_date
- end_date
- monthly_rent
- security_deposit
- status
- signed_document_id
- renewal_status
- created_at
- updated_at

Lease status:

- draft
- pending_signature
- active
- expired
- terminated
- renewed

Support multiple tenants through a lease-party relationship table.

---

# Tenant

Use Contact as the primary person record.

Create a TenantProfile only when tenant-specific data is required.

Suggested fields:

- id
- contact_id
- user_id
- screening_status
- move_in_date
- move_out_date
- emergency_contact
- created_at
- updated_at

Do not store protected-class data unless legally required and specifically approved.

---

# PropertyOwner

Use Contact or Organization as the primary identity.

Create an OwnerProfile for owner-specific preferences.

Suggested fields:

- id
- contact_id
- user_id
- organization_id
- communication_preferences
- reporting_preferences
- payment_preferences
- tax_residency_status
- created_at
- updated_at

---

# Task

Suggested fields:

- id
- title
- description
- task_type
- status
- priority
- assigned_to_user_id
- created_by_user_id
- property_id
- contact_id
- lead_id
- project_id
- due_at
- completed_at
- created_at
- updated_at

---

# Notification

Suggested fields:

- id
- user_id
- notification_type
- title
- message
- channel
- status
- related_entity_type
- related_entity_id
- scheduled_at
- sent_at
- read_at
- created_at

Channels:

- in_app
- email
- SMS
- push

---

# Communication

Stores communication history.

Suggested fields:

- id
- contact_id
- user_id
- lead_id
- property_id
- channel
- direction
- subject
- body_summary
- external_message_id
- sent_at
- created_at

Do not store sensitive full-message content unless required.

---

# CRMEvent

Represents synchronization with BoldTrail or another CRM.

Suggested fields:

- id
- contact_id
- lead_id
- provider
- external_id
- event_type
- direction
- status
- payload_reference
- occurred_at
- created_at

---

# Activity

Represents timeline activity across the platform.

Suggested fields:

- id
- actor_user_id
- entity_type
- entity_id
- activity_type
- summary
- metadata
- created_at

Examples:

- property_created
- analysis_completed
- report_generated
- document_uploaded
- inspection_completed
- lead_assigned
- task_completed

---

# Goal

Suggested fields:

- id
- user_id
- portfolio_id
- goal_type
- target_value
- current_value
- target_date
- status
- created_at
- updated_at

Goal types:

- purchase_property
- monthly_cash_flow
- annual_income
- equity
- retirement
- net_worth
- debt_reduction

---

# IntegrationConnection

Suggested fields:

- id
- organization_id
- user_id
- provider
- status
- encrypted_credentials_reference
- scopes
- last_sync_at
- last_error
- created_at
- updated_at

Never store raw credentials in normal database fields.

---

# AuditLog

Suggested fields:

- id
- actor_user_id
- organization_id
- action
- entity_type
- entity_id
- previous_values
- new_values
- IP_address
- user_agent
- created_at

Audit logs should be append-only.

---

# Relationships

Key relationships include:

- User has many Roles
- Role has many Permissions
- Contact may link to one User
- Contact has many Leads
- Property has many Ownership records
- Property has many Financial records
- Property has many Valuations
- Property has many Photos
- Property has many Analyses
- Analysis has many Scenarios
- Analysis has many CalculationResults
- Analysis may generate many Reports
- Property has many Documents
- Property has many Inspections
- Inspection has many InspectionItems
- Property has many MaintenanceRecords
- Property has many Projects
- Property has many Leases
- Portfolio has many Properties
- User may own many Portfolios

---

# Data Source Tracking

Every imported or estimated value should include a source.

Examples:

- user_entered
- MLS
- Propertyware
- BoldTrail
- tax_record
- appraisal
- third_party_estimate
- AI_inference
- calculated

Estimated and verified values must be distinguishable.

---

# Soft Deletion

Use soft deletion for records that may need recovery or historical review.

Suggested fields:

- deleted_at
- deleted_by_user_id

Do not soft-delete immutable audit records.

---

# Timestamps

Every mutable entity should include:

- created_at
- updated_at

Use UTC for storage.

Convert to the user's timezone for display.

---

# Money

Store money using decimal-safe numeric types.

Do not use floating-point types for financial values.

Store currency code where multi-currency support may be needed.

---

# Percentages

Store percentages consistently.

Recommended:

Store 8.5% as `0.085`.

Format it as `8.5%` in the interface.

Document this convention in shared schemas.

---

# JSON Usage

JSON columns may be used for:

- analysis input snapshots
- result snapshots
- scenario assumptions
- integration payload references
- flexible report configuration

Do not use JSON as a replacement for every relational table.

Important searchable fields should use dedicated columns.

---

# Indexing

Create indexes for:

- normalized property address
- MLS ID
- parcel ID
- contact email
- contact phone
- lead status
- assigned user
- property ownership
- analysis property ID
- portfolio property ID
- document property ID
- lease property ID
- task due date
- notification status
- created_at

Use compound indexes based on real query patterns.

---

# Data Retention

Define retention policies for:

- lead records
- tenant applications
- financial documents
- identity documents
- communications
- audit logs
- generated reports
- expired signed URLs
- integration logs

Retention policies must account for:

- legal requirements
- brokerage policy
- privacy
- storage cost
- litigation hold

---

# Migration Rules

All schema changes must use migrations.

Migrations must:

- be reversible when practical
- preserve existing data
- include backfill plans
- avoid destructive changes without approval
- be tested before production

---

# Backup and Recovery

The system should support:

- automated database backups
- point-in-time recovery
- object-storage versioning
- tested restore procedures
- documented recovery objectives

---

# Final Database Rule

The database is the shared memory of WealthOS™.

It must be:

- consistent
- secure
- traceable
- reusable
- understandable
- extensible

Do not create isolated feature databases or duplicate core business records without a documented architectural decision.
