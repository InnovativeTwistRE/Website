# Permissions Architecture
Version: 1.0

## Purpose

This document defines authorization across the Innovative Twist Real Estate Platform.

Authentication answers:
"Who are you?"

Permissions answer:
"What are you allowed to do?"

---

# Core Principles

- Least privilege
- Role-based access control (RBAC)
- Object-level authorization
- Organization-aware access
- Auditable permission changes
- Deny by default

---

# Authorization Layers

1. Authentication
2. Organization Membership
3. Role Assignment
4. Permission Check
5. Ownership Check
6. Resource-Level Rules
7. Action Execution
8. Audit Log

---

# Default Roles

Matches User Roles in canonical-reference.md exactly:

- Visitor
- Registered Consumer
- Buyer
- Seller
- Renter
- Homeowner
- Investor
- Property Owner/Landlord
- Tenant
- Agent/Team Member
- Property Manager
- Admin
- Joshua (owner)

**Flagged for product decision — not resolved here:** an earlier draft of this list included Vendor, Team Leader, Brokerage Admin, Platform Admin, and Super Admin. None of these are canonical User Roles in canonical-reference.md, so they've been removed rather than guessed at. Two open questions this raises, both real product decisions:
- Vendor access: vendor-domain-model-v2.md, vendor-management-v2.md, and concierge.md all assume vendors interact with the platform (project updates, scheduling, document upload). The Temporary Access section below already treats vendors as non-employee, time-limited participants rather than full platform users — if that's the intended model, no new role is needed. If vendors need persistent accounts and permissions instead, "Vendor" would need to be formally added to canonical-reference.md's User Roles (with the required governance banner) before it's used here.
- Admin granularity: this draft distinguished Team Leader / Brokerage Admin / Platform Admin / Super Admin. Canonical-reference.md only has "Admin" and "Joshua (owner)." If finer internal tiers are actually needed, that's a canonical-reference.md addition to make deliberately, not something to infer from this file.

---

# Permission Categories

## Properties
- property.view
- property.create
- property.edit
- property.archive
- property.delete

## CRM
- lead.view
- lead.create
- lead.edit
- lead.assign
- contact.manage

## Investor
- analysis.run
- portfolio.manage
- report.generate

## Property Management
- owner.view
- tenant.view
- lease.manage
- maintenance.manage
- inspection.manage
- rent.manage

## Documents
- document.upload
- document.download
- document.share
- document.delete

## Administration
- user.manage
- role.manage
- permission.manage
- organization.manage
- integration.manage

---

# Ownership Rules

Owners:
- View only their own properties and reports.

Tenants:
- View only their lease, maintenance requests, and approved documents.

Agents:
- View assigned leads, clients, and transactions.

Property Managers:
- View assigned managed properties.

Admin / Joshua (owner):
- Full administrative access.

---

# Permission Resolution

Access is granted only if:

- User is authenticated
- Organization is valid
- Role includes permission
- Resource ownership allows access
- No explicit deny rule exists

---

# Temporary Access

Support time-limited permissions for:

- Contractors
- Auditors
- Inspectors
- Vendors
- Temporary staff

Every temporary permission requires:

- start date
- expiration
- granting user
- audit entry

---

# Permission Auditing

Track:

- who granted access
- who removed access
- timestamp
- affected role
- affected permission
- reason

---

# Administrative Safeguards

Critical actions require elevated permissions:

- Delete users
- Delete properties
- Remove organizations
- Export sensitive data
- Change financial records
- Modify permissions

Optional approval workflows may be required.

---

# API Authorization

Every API endpoint must validate:

- authenticated user
- required permission
- ownership
- organization scope

Never trust client-side permission checks.

---

# Future Support

- Attribute-based access control (ABAC)
- Team-level permissions
- White-label organizations
- Enterprise policy management

---

# Final Rule

Permissions should protect data while allowing users to accomplish their work with the minimum access necessary.
