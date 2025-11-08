/* PharmaChain Dashboard - Static JS */

// Dummy data to simulate dynamic content
const dummyState = {
  userRole: "FDA",
  kpis: {
    totalBatches: 1284,
    approvalsPending: 7,
    activeAlerts: 3,
    inTransit: 56
  },
  medicineRequests: [],
  traceability: [
    { batchId: "BATCH-001", manufacturer: "Acme Pharma", status: "In Transit", location: "Denver, CO", timestamp: "2025-10-15 14:22", temperature: 4.2, humidity: 65, requestTime: "2025-10-12 08:00", packagingTime: "2025-10-13 10:30", deliveryTime: null, medicineName: "Paracetamol 500mg", quantity: 1000 },
    { batchId: "BATCH-002", manufacturer: "NovaMed", status: "At Distributor", location: "Dallas, TX", timestamp: "2025-10-15 13:01", temperature: 3.8, humidity: 68, requestTime: "2025-10-11 09:15", packagingTime: "2025-10-12 14:20", deliveryTime: null, medicineName: "Ibuprofen 200mg", quantity: 2000 },
    { batchId: "BATCH-003", manufacturer: "HealthGen", status: "Delivered", location: "Seattle, WA", timestamp: "2025-10-14 18:45", temperature: 4.5, humidity: 66, requestTime: "2025-10-10 07:30", packagingTime: "2025-10-11 11:45", deliveryTime: "2025-10-14 18:45", medicineName: "Aspirin 100mg", quantity: 1500 },
    { batchId: "BATCH-004", manufacturer: "Acme Pharma", status: "Quality Check", location: "Chicago, IL", timestamp: "2025-10-14 09:32", temperature: 4.1, humidity: 64, requestTime: "2025-10-13 06:00", packagingTime: "2025-10-13 18:00", deliveryTime: null, medicineName: "Amoxicillin 250mg", quantity: 800 },
    { batchId: "BATCH-005", manufacturer: "BioCore", status: "In Transit", location: "Phoenix, AZ", timestamp: "2025-10-13 21:09", temperature: 6.8, humidity: 70, requestTime: "2025-10-11 10:20", packagingTime: "2025-10-12 16:40", deliveryTime: null, medicineName: "Ciprofloxacin 500mg", quantity: 1200 },
    { batchId: "BATCH-006", manufacturer: "Acme Pharma", status: "At Manufacturer", location: "St. Louis, MO", timestamp: "2025-10-13 11:20", temperature: 4.0, humidity: 65, requestTime: "2025-10-12 14:00", packagingTime: null, deliveryTime: null, medicineName: "Metformin 500mg", quantity: 2500 },
    { batchId: "BATCH-007", manufacturer: "NovaMed", status: "In Transit", location: "Boise, ID", timestamp: "2025-10-13 08:10", temperature: 4.3, humidity: 67, requestTime: "2025-10-10 08:30", packagingTime: "2025-10-11 15:20", deliveryTime: null, medicineName: "Omeprazole 20mg", quantity: 1800 },
    { batchId: "BATCH-008", manufacturer: "HealthGen", status: "Delivered", location: "Miami, FL", timestamp: "2025-10-12 20:54", temperature: 4.6, humidity: 69, requestTime: "2025-10-09 11:00", packagingTime: "2025-10-10 09:30", deliveryTime: "2025-10-12 20:54", medicineName: "Lisinopril 10mg", quantity: 3000 },
    { batchId: "BATCH-009", manufacturer: "BioCore", status: "At Distributor", location: "Reno, NV", timestamp: "2025-10-12 17:32", temperature: 4.4, humidity: 66, requestTime: "2025-10-10 13:45", packagingTime: "2025-10-11 10:15", deliveryTime: null, medicineName: "Atorvastatin 20mg", quantity: 2200 },
    { batchId: "BATCH-010", manufacturer: "Acme Pharma", status: "Quality Check", location: "Cleveland, OH", timestamp: "2025-10-12 15:01", temperature: 4.2, humidity: 65, requestTime: "2025-10-11 09:00", packagingTime: "2025-10-12 12:00", deliveryTime: null, medicineName: "Levothyroxine 50mcg", quantity: 950 },
    { batchId: "BATCH-011", manufacturer: "NovaMed", status: "In Transit", location: "Portland, OR", timestamp: "2025-10-11 16:30", temperature: 4.1, humidity: 64, requestTime: "2025-10-09 10:15", packagingTime: "2025-10-10 14:25", deliveryTime: null, medicineName: "Amlodipine 5mg", quantity: 1600 },
    { batchId: "BATCH-012", manufacturer: "HealthGen", status: "At Distributor", location: "Austin, TX", timestamp: "2025-10-11 10:15", temperature: 4.3, humidity: 66, requestTime: "2025-10-09 08:00", packagingTime: "2025-10-10 11:30", deliveryTime: null, medicineName: "Metoprolol 25mg", quantity: 2100 },
    { batchId: "BATCH-013", manufacturer: "BioCore", status: "Delivered", location: "San Diego, CA", timestamp: "2025-10-10 19:22", temperature: 4.5, humidity: 67, requestTime: "2025-10-08 07:20", packagingTime: "2025-10-09 09:45", deliveryTime: "2025-10-10 19:22", medicineName: "Losartan 50mg", quantity: 1400 },
    { batchId: "BATCH-014", manufacturer: "Acme Pharma", status: "In Transit", location: "Atlanta, GA", timestamp: "2025-10-10 14:08", temperature: 4.0, humidity: 65, requestTime: "2025-10-08 13:30", packagingTime: "2025-10-09 16:20", deliveryTime: null, medicineName: "Gabapentin 300mg", quantity: 1900 },
    { batchId: "BATCH-015", manufacturer: "NovaMed", status: "Quality Check", location: "Boston, MA", timestamp: "2025-10-09 11:45", temperature: 4.2, humidity: 64, requestTime: "2025-10-07 14:00", packagingTime: "2025-10-08 10:30", deliveryTime: null, medicineName: "Tramadol 50mg", quantity: 1100 }
  ],
  iot: {
    labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
    temperature: [4.2, 4.0, 4.6, 5.1, 4.8, 4.3, 4.4],
    humidity: [65, 64, 66, 68, 70, 67, 66],
    pressure: [101.2, 101.1, 101.0, 101.3, 101.4, 101.2, 101.1],
    alerts: [
      { type: "Temperature Spike", batchId: "BATCH-005", timestamp: "2025-10-15 16:05", status: "Pending" },
      { type: "Humidity Drift", batchId: "BATCH-002", timestamp: "2025-10-15 15:12", status: "Resolved" },
      { type: "Pressure Drop", batchId: "BATCH-004", timestamp: "2025-10-14 11:47", status: "Pending" }
    ]
  },
  approvals: {
    history: [
      { batchId: "BATCH-097", requester: "Acme Pharma", status: "Approved", timestamp: "2025-10-13 10:13" },
      { batchId: "BATCH-088", requester: "NovaMed", status: "Rejected", timestamp: "2025-10-12 09:47" },
      { batchId: "BATCH-101", requester: "HealthGen", status: "Under Review", timestamp: "2025-10-15 08:22" }
    ]
  },
  alerts: [
    { type: "Route Deviation", batchId: "BATCH-005", timestamp: "2025-10-15 17:10", status: "Pending" },
    { type: "Seal Tamper", batchId: "BATCH-012", timestamp: "2025-10-14 12:02", status: "Resolved" },
    { type: "Temperature Spike", batchId: "BATCH-005", timestamp: "2025-10-15 16:05", status: "Pending" }
  ],
  notifications: [
    { id: 1, type: "alert", title: "Temperature Spike Detected", message: "Batch BATCH-005 exceeded safe temperature threshold (6.8°C)", timestamp: "2025-10-15 16:05", batchId: "BATCH-005", read: false, icon: "bi-exclamation-triangle-fill", color: "danger" },
    { id: 2, type: "warning", title: "Route Deviation Alert", message: "Batch BATCH-005 deviated >10km from planned route", timestamp: "2025-10-15 17:10", batchId: "BATCH-005", read: false, icon: "bi-signpost-split", color: "warning" },
    { id: 3, type: "info", title: "FDA Approval Required", message: "3 new batches pending FDA approval review", timestamp: "2025-10-15 18:25", batchId: null, read: false, icon: "bi-shield-check", color: "info" },
    { id: 4, type: "success", title: "Batch Delivered", message: "Batch BATCH-003 successfully delivered to Seattle, WA", timestamp: "2025-10-14 18:45", batchId: "BATCH-003", read: true, icon: "bi-check-circle-fill", color: "success" },
    { id: 5, type: "info", title: "Quality Check Passed", message: "Batch BATCH-004 passed quality inspection", timestamp: "2025-10-15 11:15", batchId: "BATCH-004", read: true, icon: "bi-clipboard-check", color: "info" },
    { id: 6, type: "warning", title: "Sensor Drift Detected", message: "Humidity sensor drift +4% detected on batch BATCH-002", timestamp: "2025-10-15 12:30", batchId: "BATCH-002", read: false, icon: "bi-thermometer-half", color: "warning" }
  ],
  logs: [
    "2025-10-15 18:45 INFO  Batch BATCH-001 location updated: Denver, CO",
    "2025-10-15 18:25 INFO  FDA approval status fetched: pending=7",
    "2025-10-15 17:10 ALERT Route deviation > 10km (batch BATCH-005)",
    "2025-10-15 16:05 ALERT Temperature spike: 6.8°C (batch BATCH-005)",
    "2025-10-15 15:30 INFO  Blockchain transaction confirmed: batch=BATCH-012",
    "2025-10-15 14:22 INFO  Batch BATCH-001 status changed: In Transit",
    "2025-10-15 13:45 INFO  Distributor checkpoint: Dallas, TX (BATCH-002)",
    "2025-10-15 13:01 INFO  Batch BATCH-002 scanned at distributor facility",
    "2025-10-15 12:30 WARN  Sensor drift detected: humidity +4% (batch BATCH-002)",
    "2025-10-15 11:15 INFO  Quality check completed: BATCH-004 passed",
    "2025-10-15 10:08 INFO  IoT gateway reconnected: gw-23f8",
    "2025-10-15 09:12 INFO  IoT gateway connected: gw-23f8",
    "2025-10-15 08:30 INFO  New batch registered: BATCH-015",
    "2025-10-15 08:01 INFO  Blockchain synced: height=582, peers=12"
  ]
};

// Map utilities
const cityToLatLng = {
  "Denver, CO": [39.7392, -104.9903],
  "Dallas, TX": [32.7767, -96.7970],
  "Seattle, WA": [47.6062, -122.3321],
  "Chicago, IL": [41.8781, -87.6298],
  "Phoenix, AZ": [33.4484, -112.0740],
  "St. Louis, MO": [38.6270, -90.1994],
  "Boise, ID": [43.6150, -116.2023],
  "Miami, FL": [25.7617, -80.1918],
  "Reno, NV": [39.5296, -119.8138],
  "Cleveland, OH": [41.4993, -81.6944],
  "Portland, OR": [45.5152, -122.6784],
  "Austin, TX": [30.2672, -97.7431],
  "San Diego, CA": [32.7157, -117.1611],
  "Atlanta, GA": [33.7490, -84.3880],
  "Boston, MA": [42.3601, -71.0589],
  "Manufacturing Facility": [39.8283, -98.5795] // USA centroid fallback
};

let liveMap, mapMarkers = {};

function initMap() {
  const mapEl = document.getElementById('liveMap');
  if (!mapEl || typeof L === 'undefined') return;
  if (liveMap) return; // init once
  liveMap = L.map('liveMap').setView([39.5, -98.35], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(liveMap);

  // Add markers for batches
  dummyState.traceability.forEach(batch => upsertBatchMarker(batch));

  // Simulate movement every 5s for in-transit batches
  setInterval(simulateLiveMovement, 5000);
}

function getLatLngForBatch(batch) {
  const loc = batch.location || 'Manufacturing Facility';
  return cityToLatLng[loc] || cityToLatLng['Manufacturing Facility'];
}

function upsertBatchMarker(batch) {
  const [lat, lng] = getLatLngForBatch(batch);
  const label = `${batch.batchId} • ${batch.status}`;
  if (mapMarkers[batch.batchId]) {
    mapMarkers[batch.batchId].setLatLng([lat, lng]).bindPopup(getMarkerPopup(batch));
  } else {
    const marker = L.marker([lat, lng]).addTo(liveMap).bindPopup(getMarkerPopup(batch));
    mapMarkers[batch.batchId] = marker;
  }
}

function getMarkerPopup(batch) {
  return `<div><strong>${batch.batchId}</strong><br/>
    ${batch.medicineName ? `${batch.medicineName} • ${batch.quantity} units<br/>` : ''}
    <span class="badge bg-secondary">${batch.manufacturer}</span>
    <div class="mt-1">${getStatusBadge(batch.status)}</div>
    <div class="small text-secondary mt-1"><i class="bi bi-geo-alt me-1"></i>${batch.location}</div>
  </div>`;
}

function simulateLiveMovement() {
  const moving = dummyState.traceability.filter(b => b.status === 'In Transit');
  moving.forEach(batch => {
    const marker = mapMarkers[batch.batchId];
    if (!marker) return;
    const current = marker.getLatLng();
    // small random delta ~0.01 deg
    const dLat = (Math.random() - 0.5) * 0.02;
    const dLng = (Math.random() - 0.5) * 0.02;
    const next = L.latLng(current.lat + dLat, current.lng + dLng);
    marker.setLatLng(next);
  });
}

// Utility: switch sections
function showSection(key) {
  const sections = ["overview", "request", "traceability", "map", "iot", "fda", "alerts", "reports"];
  sections.forEach((s) => {
    const el = document.getElementById(`section-${s}`);
    if (!el) return;
    if (s === key) {
      el.classList.remove("d-none");
    } else {
      el.classList.add("d-none");
    }
  });
}

// Render KPI cards with role-specific labels
function renderKpis() {
  const role = roleConfig[dummyState.userRole] || roleConfig.FDA;
  
  document.getElementById("kpiBatches").textContent = dummyState.kpis.totalBatches;
  document.getElementById("kpiApprovals").textContent = dummyState.kpis.approvalsPending;
  document.getElementById("kpiAlerts").textContent = dummyState.kpis.activeAlerts;
  document.getElementById("kpiTransit").textContent = dummyState.kpis.inTransit;
  
  // Update KPI labels based on role
  const kpiLabels = {
    FDA: {
      batches: "Total Batches Tracked",
      approvals: "FDA Approvals Pending",
      alerts: "Active Alerts",
      transit: "Drugs in Transit"
    },
    Manufacturer: {
      batches: "My Batches Produced",
      approvals: "Pending Approvals",
      alerts: "Quality Alerts",
      transit: "Batches Shipped"
    },
    Distributor: {
      batches: "Batches in Network",
      approvals: "Awaiting Approval",
      alerts: "Shipment Alerts",
      transit: "Active Shipments"
    },
    Pharmacy: {
      batches: "Batches Received",
      approvals: "Verification Needed",
      alerts: "Receiving Alerts",
      transit: "Expected Deliveries"
    }
  };
  
  const labels = kpiLabels[dummyState.userRole] || kpiLabels.FDA;
  const labelBatches = document.getElementById("kpiLabelBatches");
  const labelApprovals = document.getElementById("kpiLabelApprovals");
  const labelAlerts = document.getElementById("kpiLabelAlerts");
  const labelTransit = document.getElementById("kpiLabelTransit");
  
  if (labelBatches) labelBatches.textContent = labels.batches;
  if (labelApprovals) labelApprovals.textContent = labels.approvals;
  if (labelAlerts) labelAlerts.textContent = labels.alerts;
  if (labelTransit) labelTransit.textContent = labels.transit;
  
  // Show/hide approval card based on role
  const approvalCard = document.querySelector("#kpiApprovals").closest(".col-12");
  if (approvalCard && !role.canApprove && dummyState.userRole !== "Manufacturer") {
    approvalCard.style.display = "none";
  } else if (approvalCard) {
    approvalCard.style.display = "";
  }
}

// Traceability sorting & pagination state
const traceState = {
  filter: "",
  sortKey: "timestamp",
  sortDir: "desc", // 'asc' | 'desc'
  page: 1,
  pageSize: 10
};

function compareRows(a, b, key) {
  const av = a[key];
  const bv = b[key];
  if (key === "timestamp") {
    // ISO-like strings sort lexicographically fine, but be explicit
    return av.localeCompare(bv);
  }
  return String(av).localeCompare(String(bv));
}

function getStatusBadge(status) {
  const statusMap = {
    "In Transit": { class: "primary", icon: "bi-truck" },
    "At Distributor": { class: "info", icon: "bi-building" },
    "Delivered": { class: "success", icon: "bi-check-circle" },
    "Quality Check": { class: "warning", icon: "bi-clipboard-check" },
    "At Manufacturer": { class: "secondary", icon: "bi-gear" }
  };
  const config = statusMap[status] || { class: "secondary", icon: "bi-question" };
  return `<span class="badge bg-${config.class}"><i class="bi ${config.icon} me-1"></i>${status}</span>`;
}

// Batch timeline data generator
function getBatchTimeline(batchId) {
  const batch = dummyState.traceability.find((b) => b.batchId === batchId);
  if (!batch) return [];
  
  const timeline = [];
  
  // Request Time
  if (batch.requestTime) {
    timeline.push({
      label: "Medicine Requested",
      ts: batch.requestTime,
      loc: batch.location,
      status: "completed",
      icon: "bi-calendar-check-fill"
    });
  }
  
  // Packaging Time
  if (batch.packagingTime) {
    timeline.push({
      label: "Packaging Completed",
      ts: batch.packagingTime,
      loc: batch.location,
      status: "completed",
      icon: "bi-box-seam-fill"
    });
  } else {
    timeline.push({
      label: "Packaging",
      ts: "Pending",
      loc: "—",
      status: "pending",
      icon: "bi-hourglass-split"
    });
  }
  
  // Delivery Time
  if (batch.deliveryTime) {
    timeline.push({
      label: "Delivered",
      ts: batch.deliveryTime,
      loc: batch.location,
      status: "completed",
      icon: "bi-truck"
    });
  } else {
    timeline.push({
      label: "Delivery",
      ts: "In Progress",
      loc: batch.location,
      status: batch.status === "Delivered" ? "completed" : "current",
      icon: "bi-truck"
    });
  }
  
  return timeline;
}

function getFilteredSortedTraceability() {
  const needle = traceState.filter.trim().toLowerCase();
  // Get role-filtered data first
  let baseData = getRoleFilteredTraceability();
  
  // Then apply search filter
  let rows = baseData.filter((r) => {
    if (!needle) return true;
    return (
      r.batchId.toLowerCase().includes(needle) ||
      r.manufacturer.toLowerCase().includes(needle) ||
      r.status.toLowerCase().includes(needle)
    );
  });
  rows.sort((a, b) => {
    const cmp = compareRows(a, b, traceState.sortKey);
    return traceState.sortDir === "asc" ? cmp : -cmp;
  });
  return rows;
}

function renderTraceability() {
  const tbody = document.getElementById("traceTableBody");
  const rowsAll = getFilteredSortedTraceability();
  const total = rowsAll.length;
  const startIdx = (traceState.page - 1) * traceState.pageSize;
  const pageRows = rowsAll.slice(startIdx, startIdx + traceState.pageSize);
  tbody.innerHTML = pageRows
    .map((r) => {
      const requestTime = r.requestTime ? `<small class="text-secondary"><i class="bi bi-calendar-check me-1"></i>${r.requestTime}</small>` : '<span class="text-muted">—</span>';
      const packagingTime = r.packagingTime ? `<small class="text-secondary"><i class="bi bi-box-seam me-1"></i>${r.packagingTime}</small>` : '<span class="text-muted">—</span>';
      const deliveryTime = r.deliveryTime ? `<small class="text-success"><i class="bi bi-truck me-1"></i>${r.deliveryTime}</small>` : '<span class="text-muted">—</span>';
      
      return `<tr data-batch="${r.batchId}" style="cursor: pointer;">
        <td><strong>${r.batchId}</strong></td>
        <td>${r.manufacturer}</td>
        <td>${getStatusBadge(r.status)}</td>
        <td>${requestTime}</td>
        <td>${packagingTime}</td>
        <td>${deliveryTime}</td>
        <td><i class="bi bi-geo-alt me-1"></i>${r.location}</td>
      </tr>`;
    })
    .join("") || `<tr><td colspan="7" class="text-center text-secondary py-4">No results found</td></tr>`;

  // Pager info
  const info = document.getElementById("tracePagerInfo");
  const endIdx = Math.min(startIdx + pageRows.length, total);
  info.textContent = total ? `Showing ${startIdx + 1}-${endIdx} of ${total}` : "No results";

  // Prev/Next state
  document.getElementById("tracePrev").disabled = traceState.page <= 1;
  document.getElementById("traceNext").disabled = endIdx >= total;

  // Row click -> modal
  tbody.querySelectorAll("tr[data-batch]").forEach((tr) => {
    tr.addEventListener("click", () => {
      const id = tr.getAttribute('data-batch');
      openBatchModal(id);
      // Also focus map on this batch if map exists
      if (liveMap && mapMarkers[id]) {
        const m = mapMarkers[id];
        liveMap.setView(m.getLatLng(), 8, { animate: true });
        m.openPopup();
      }
    });
  });
}

// IoT charts
let tempChart, humidChart, pressChart;
function renderIotCharts() {
  const common = {
    type: "line",
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { display: false } }, y: { grid: { color: "#eef0f4" } } }
    }
  };

  const tempCtx = document.getElementById("tempChart");
  const humidCtx = document.getElementById("humidChart");
  const pressCtx = document.getElementById("pressChart");

  if (tempChart) tempChart.destroy();
  if (humidChart) humidChart.destroy();
  if (pressChart) pressChart.destroy();

  tempChart = new Chart(tempCtx, {
    ...common,
    data: {
      labels: dummyState.iot.labels,
      datasets: [{ 
        data: dummyState.iot.temperature, 
        borderColor: "#0d6efd", 
        backgroundColor: "rgba(13, 110, 253, 0.1)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      ...common.options,
      scales: {
        ...common.options.scales,
        y: { 
          ...common.options.scales.y,
          title: { display: true, text: "Temperature (°C)" }
        }
      }
    }
  });
  humidChart = new Chart(humidCtx, {
    ...common,
    data: {
      labels: dummyState.iot.labels,
      datasets: [{ 
        data: dummyState.iot.humidity, 
        borderColor: "#20c997", 
        backgroundColor: "rgba(32, 201, 151, 0.1)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      ...common.options,
      scales: {
        ...common.options.scales,
        y: { 
          ...common.options.scales.y,
          title: { display: true, text: "Humidity (%)" }
        }
      }
    }
  });
  pressChart = new Chart(pressCtx, {
    ...common,
    data: {
      labels: dummyState.iot.labels,
      datasets: [{ 
        data: dummyState.iot.pressure, 
        borderColor: "#fd7e14", 
        backgroundColor: "rgba(253, 126, 20, 0.1)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      ...common.options,
      scales: {
        ...common.options.scales,
        y: { 
          ...common.options.scales.y,
          title: { display: true, text: "Pressure (kPa)" }
        }
      }
    }
  });
}

function renderIotAlerts() {
  const list = document.getElementById("iotAlertList");
  list.innerHTML = dummyState.iot.alerts
    .map((a) => {
      const statusBadge = a.status === "Resolved" ? "success" : "warning";
      return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span><strong>${a.type}</strong> — ${a.batchId} <span class="text-secondary">(${a.timestamp})</span></span>
        <span class="badge bg-${statusBadge}">${a.status}</span>
      </li>`;
    })
    .join("");
}

// Approval history
function renderApprovalHistory() {
  const tbody = document.getElementById("approvalHistory");
  tbody.innerHTML = dummyState.approvals.history
    .map((h) => {
      const badge = h.status === "Approved" ? "success" : h.status === "Rejected" ? "danger" : "secondary";
      return `<tr>
        <td>${h.batchId}</td>
        <td>${h.requester}</td>
        <td><span class="badge bg-${badge}">${h.status}</span></td>
        <td>${h.timestamp}</td>
      </tr>`;
    })
    .join("");
}

// Alerts & Anomalies (role-aware)
function renderAlerts() {
  const list = document.getElementById("alertsList");
  const filterSel = document.getElementById("alertsFilter");
  const status = filterSel ? filterSel.value : "All";
  const role = roleConfig[dummyState.userRole] || roleConfig.FDA;
  
  // Filter alerts based on role
  let alerts = dummyState.alerts;
  if (role.statusFilter) {
    // For Distributor/Pharmacy, show only relevant alerts
    alerts = alerts.filter(a => {
      const batch = dummyState.traceability.find(b => b.batchId === a.batchId);
      return batch && role.statusFilter.includes(batch.status);
    });
  }
  
  const items = alerts
    .filter((al) => (status === "All" ? true : al.status === status))
    .map((al) => {
      const badge = al.status === "Resolved" ? "success" : "warning";
      return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span><i class="bi bi-exclamation-triangle text-danger me-2"></i><strong>${al.type}</strong> — ${al.batchId} <span class="text-secondary">(${al.timestamp})</span></span>
        <span class="badge bg-${badge}">${al.status}</span>
      </li>`;
    })
    .join("");
  list.innerHTML = items || `<li class="list-group-item text-center text-secondary">No alerts</li>`;
}

// Logs
function renderLogs() {
  const viewer = document.getElementById("logViewer");
  viewer.innerHTML = dummyState.logs.map((l) => `<div>${l}</div>`).join("");
}

// Notifications
function renderNotifications() {
  const container = document.getElementById("notificationItems");
  const notifyCount = document.getElementById("notifyCount");
  
  // Get unread notifications
  const unread = dummyState.notifications.filter(n => !n.read);
  const count = unread.length;
  notifyCount.textContent = count > 0 ? String(count) : "";
  notifyCount.style.display = count > 0 ? "block" : "none";
  
  // Sort: unread first, then by timestamp
  const sorted = [...dummyState.notifications].sort((a, b) => {
    if (a.read !== b.read) return a.read ? 1 : -1;
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  
  // Show latest 5 notifications
  const display = sorted.slice(0, 5);
  
  if (display.length === 0) {
    container.innerHTML = '<div class="px-3 py-4 text-center text-secondary small"><i class="bi bi-inbox me-2"></i>No notifications</div>';
    return;
  }
  
  container.innerHTML = display.map(n => {
    const timeAgo = getTimeAgo(n.timestamp);
    const readClass = n.read ? "" : "bg-light border-start border-3 border-primary";
    const readIcon = n.read ? "" : '<i class="bi bi-circle-fill text-primary me-2" style="font-size: 0.5rem;"></i>';
    
    return `<li class="dropdown-item ${readClass}" data-notification-id="${n.id}">
      <div class="d-flex align-items-start gap-2">
        <div class="flex-shrink-0">
          <i class="bi ${n.icon} text-${n.color}" style="font-size: 1.1rem;"></i>
        </div>
        <div class="flex-grow-1" style="min-width: 0;">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <strong class="small">${readIcon}${n.title}</strong>
            <button class="btn-close btn-close-sm" style="font-size: 0.5rem;" onclick="window.markNotificationRead(${n.id}); event.stopPropagation();" aria-label="Mark as read"></button>
          </div>
          <div class="small text-secondary mb-1">${n.message}</div>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">${timeAgo}</small>
            ${n.batchId ? `<span class="badge bg-secondary small">${n.batchId}</span>` : ""}
          </div>
        </div>
      </div>
    </li>`;
  }).join("");
  
  // Add click handlers
  container.querySelectorAll(".dropdown-item").forEach((item, idx) => {
    const notif = display[idx];
    item.addEventListener("click", () => {
      markNotificationRead(notif.id);
      if (notif.batchId) {
        showSection("traceability");
        document.querySelector("#navLinks a[data-section='traceability']").click();
        setTimeout(() => {
          const row = document.querySelector(`tr[data-batch="${notif.batchId}"]`);
          if (row) {
            row.scrollIntoView({ behavior: "smooth", block: "center" });
            row.style.backgroundColor = "#fff3cd";
            setTimeout(() => row.style.backgroundColor = "", 2000);
          }
        }, 300);
      } else if (notif.type === "info" && notif.title.includes("FDA")) {
        showSection("fda");
        document.querySelector("#navLinks a[data-section='fda']").click();
      }
    });
  });
}

function getTimeAgo(timestamp) {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now - time;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return time.toLocaleDateString();
}

function markNotificationRead(id) {
  const notif = dummyState.notifications.find(n => n.id === id);
  if (notif) {
    notif.read = true;
    renderNotifications();
  }
}

function markAllNotificationsRead() {
  dummyState.notifications.forEach(n => n.read = true);
  renderNotifications();
}

// Make functions globally accessible for onclick handlers
window.markNotificationRead = markNotificationRead;

// Batch Modal
let batchModal;
function openBatchModal(batchId) {
  const data = dummyState.traceability.find((r) => r.batchId === batchId);
  if (!data) return;
  document.getElementById("modalBatchId").textContent = data.batchId;
  document.getElementById("modalManufacturer").textContent = data.manufacturer;
  document.getElementById("modalStatus").innerHTML = getStatusBadge(data.status);
  const timeline = document.getElementById("modalTimeline");
  const steps = getBatchTimeline(batchId);
  timeline.innerHTML = steps
    .map((s, idx) => {
      let iconClass, borderClass;
      if (s.status === "current") {
        iconClass = "bi-circle-fill text-primary";
        borderClass = "border-primary";
      } else if (s.status === "completed") {
        iconClass = "bi-check-circle-fill text-success";
        borderClass = "border-success";
      } else {
        iconClass = "bi-hourglass-split text-warning";
        borderClass = "border-warning";
      }
      return `<li class="list-group-item d-flex align-items-start ${borderClass} border-start border-3">
        <i class="bi ${s.icon || iconClass} me-2 mt-1"></i>
        <div class="flex-grow-1">
          <strong>${s.label}</strong>
          <div class="small text-secondary mt-1">
            <i class="bi bi-clock me-1"></i>${s.ts} · <i class="bi bi-geo-alt me-1"></i>${s.loc}
          </div>
        </div>
      </li>`;
    })
    .join("");
  
  // Add medicine info if available
  if (data.medicineName) {
    const medicineInfo = `<div class="mt-3 p-2 bg-light rounded">
      <div class="mb-2"><strong>Medicine:</strong> ${data.medicineName}</div>
      <div class="mb-2"><strong>Quantity:</strong> ${data.quantity.toLocaleString()} units</div>
      ${data.requestTime ? `<div><strong>Request Time:</strong> ${data.requestTime}</div>` : ""}
    </div>`;
    timeline.insertAdjacentHTML("beforeend", medicineInfo);
  }
  
  if (data.temperature !== undefined) {
    const extra = `<div class="mt-3 p-2 bg-light rounded">
      <small class="text-muted"><strong>Current Conditions:</strong> 
      <span class="badge bg-info ms-2">${data.temperature}°C</span>
      <span class="badge bg-success ms-1">${data.humidity}% RH</span>
    </div>`;
    timeline.insertAdjacentHTML("beforeend", extra);
  }
  if (!batchModal) {
    batchModal = new bootstrap.Modal(document.getElementById("batchModal"));
  }
  batchModal.show();
}

// Reports: client-side download helpers
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function toCsv(rows, headers) {
  const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const head = headers.map(esc).join(",");
  const body = rows.map((r) => headers.map((h) => esc(r[h])).join(",")).join("\n");
  return `${head}\n${body}`;
}

// Navigation handlers
function setupNavigation() {
  const nav = document.getElementById("navLinks");
  nav.querySelectorAll("a[data-section]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const key = a.getAttribute("data-section");
      nav.querySelectorAll("a").forEach((n) => n.classList.remove("active"));
      a.classList.add("active");
      showSection(key);
      if (key === "iot") {
        renderIotCharts();
      } else if (key === 'map') {
        initMap();
      }
    });
  });
}

// Sidebar toggle (mobile)
function setupSidebarToggle() {
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("toggleSidebar");
  if (!btn) return;
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    document.body.classList.toggle("offcanvas-open");
  });
}

// Traceability controls
function setupTraceabilityControls() {
  const search = document.getElementById("traceSearch");
  const pageSizeSel = document.getElementById("tracePageSize");
  const prevBtn = document.getElementById("tracePrev");
  const nextBtn = document.getElementById("traceNext");

  search.addEventListener("input", () => {
    traceState.filter = search.value;
    traceState.page = 1;
    renderTraceability();
  });
  pageSizeSel.addEventListener("change", () => {
    traceState.pageSize = parseInt(pageSizeSel.value, 10);
    traceState.page = 1;
    renderTraceability();
  });
  prevBtn.addEventListener("click", () => {
    if (traceState.page > 1) {
      traceState.page -= 1;
      renderTraceability();
    }
  });
  nextBtn.addEventListener("click", () => {
    const total = getFilteredSortedTraceability().length;
    const maxPage = Math.ceil(total / traceState.pageSize) || 1;
    if (traceState.page < maxPage) {
      traceState.page += 1;
      renderTraceability();
    }
  });

  // Sorting by clicking headers
  document.querySelectorAll('#traceTable thead th.sortable').forEach((th) => {
    th.style.cursor = 'pointer';
    th.addEventListener('click', () => {
      const key = th.getAttribute('data-key');
      if (traceState.sortKey === key) {
        traceState.sortDir = traceState.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        traceState.sortKey = key;
        traceState.sortDir = 'asc';
      }
      traceState.page = 1;
      renderTraceability();
    });
  });
}

function setupAlertsFilter() {
  const sel = document.getElementById("alertsFilter");
  if (!sel) return;
  sel.addEventListener("change", renderAlerts);
}

function setupReportDownloads() {
  const btnCompliance = document.getElementById("btnDownloadCompliance");
  const btnShipments = document.getElementById("btnDownloadShipments");
  const btnIot = document.getElementById("btnDownloadIot");

  btnCompliance.addEventListener("click", () => {
    const content = `PharmaChain Monthly Compliance Report\n\nPending approvals: ${dummyState.kpis.approvalsPending}\nActive alerts: ${dummyState.kpis.activeAlerts}\nBatches tracked: ${dummyState.kpis.totalBatches}`;
    downloadFile("compliance-report.txt", content, "text/plain");
  });
  btnShipments.addEventListener("click", () => {
    const headers = ["batchId", "manufacturer", "status", "location", "timestamp"];
    const csv = toCsv(dummyState.traceability, headers);
    downloadFile("shipment-summary.csv", csv, "text/csv");
  });
  btnIot.addEventListener("click", () => {
    const json = JSON.stringify({ labels: dummyState.iot.labels, temperature: dummyState.iot.temperature, humidity: dummyState.iot.humidity, pressure: dummyState.iot.pressure }, null, 2);
    downloadFile("iot-metrics.json", json, "application/json");
  });
}

// Role configuration
const roleConfig = {
  FDA: {
    nav: ["overview", "request", "traceability", "map", "iot", "fda", "alerts", "reports"],
    kpis: {
      totalBatches: 1284,
      approvalsPending: 7,
      activeAlerts: 3,
      inTransit: 56
    },
    title: "FDA Regulatory Dashboard",
    canApprove: true,
    canViewAll: true
  },
  Manufacturer: {
    nav: ["overview", "request", "traceability", "map", "iot", "alerts", "reports"],
    kpis: {
      totalBatches: 342,
      approvalsPending: 3,
      activeAlerts: 1,
      inTransit: 18
    },
    title: "Manufacturing Dashboard",
    canApprove: false,
    canViewAll: false,
    manufacturerFilter: ["Acme Pharma", "NovaMed", "HealthGen", "BioCore"]
  },
  Distributor: {
    nav: ["overview", "request", "traceability", "map", "iot", "alerts", "reports"],
    kpis: {
      totalBatches: 89,
      approvalsPending: 0,
      activeAlerts: 2,
      inTransit: 45
    },
    title: "Distribution Dashboard",
    canApprove: false,
    canViewAll: false,
    statusFilter: ["In Transit", "At Distributor"]
  },
  Pharmacy: {
    nav: ["overview", "request", "traceability", "map", "alerts", "reports"],
    kpis: {
      totalBatches: 24,
      approvalsPending: 0,
      activeAlerts: 0,
      inTransit: 0
    },
    title: "Pharmacy Receiving Dashboard",
    canApprove: false,
    canViewAll: false,
    statusFilter: ["Delivered", "At Distributor"]
  }
};

// Role switcher with UI updates
function setupRoleSwitcher() {
  const switcher = document.getElementById("roleSwitcher");
  const roleTop = document.getElementById("roleTop");
  if (!switcher) return;
  switcher.value = dummyState.userRole;
  switcher.addEventListener("change", (e) => {
    dummyState.userRole = e.target.value;
    roleTop.textContent = e.target.value;
    applyRoleBasedUI();
  });
}

// Apply role-based UI changes
function applyRoleBasedUI() {
  const role = roleConfig[dummyState.userRole] || roleConfig.FDA;
  
  // Update page title
  document.querySelector("header h1").textContent = role.title;
  
  // Update navigation - show/hide items
  const navLinks = document.querySelectorAll("#navLinks a[data-section]");
  navLinks.forEach((link) => {
    const section = link.getAttribute("data-section");
    const li = link.closest("li");
    if (role.nav.includes(section)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
  
  // Update KPIs
  dummyState.kpis = role.kpis;
  renderKpis();
  
  // Update traceability data based on role
  updateTraceabilityForRole();
  
  // Re-render alerts with role filter
  renderAlerts();
  
  // Show/hide FDA section
  const fdaSection = document.getElementById("section-fda");
  if (fdaSection) {
    fdaSection.classList.toggle("d-none", !role.canApprove);
  }
  
  // Show/hide IoT section
  const iotSection = document.getElementById("section-iot");
  if (iotSection) {
    iotSection.classList.toggle("d-none", !role.nav.includes("iot"));
  }
  
  // Reset to overview if current section not available
  const currentSection = document.querySelector(".section:not(.d-none)");
  if (!currentSection || currentSection.classList.contains("d-none")) {
    showSection("overview");
    document.querySelector("#navLinks a[data-section='overview']").classList.add("active");
    document.querySelectorAll("#navLinks a").forEach(a => {
      if (a.getAttribute("data-section") !== "overview") a.classList.remove("active");
    });
  }
}

// Update traceability data based on role
function updateTraceabilityForRole() {
  const role = roleConfig[dummyState.userRole] || roleConfig.FDA;
  
  // In a real app, this would filter from API
  // For now, we'll just update the display
  renderTraceability();
}

// Role-specific traceability filter
function getRoleFilteredTraceability() {
  const role = roleConfig[dummyState.userRole] || roleConfig.FDA;
  let data = dummyState.traceability;
  
  if (role.manufacturerFilter) {
    data = data.filter(b => role.manufacturerFilter.includes(b.manufacturer));
  }
  
  if (role.statusFilter) {
    data = data.filter(b => role.statusFilter.includes(b.status));
  }
  
  return data;
}

// Initialize
function init() {
  // Role
  setupRoleSwitcher();
  
  // Apply initial role-based UI
  applyRoleBasedUI();

  // Setup notifications
  renderNotifications();
  document.getElementById("markAllRead").addEventListener("click", (e) => {
    e.stopPropagation();
    markAllNotificationsRead();
  });
  document.getElementById("viewAllNotifications").addEventListener("click", () => {
    showSection("alerts");
    document.querySelector("#navLinks a[data-section='alerts']").click();
  });

  // Render sections
  renderKpis();
  renderTraceability();
  renderIotAlerts();
  renderApprovalHistory();
  renderAlerts();
  renderLogs();

  setupTraceabilityControls();
  setupAlertsFilter();
  setupReportDownloads();
  setupRequestForm();
  renderRecentRequests();

  setupNavigation();
  setupSidebarToggle();
  showSection("overview");
}

// Request form handling
function setupRequestForm() {
  const form = document.getElementById("requestForm");
  if (!form) return;
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const medicineName = document.getElementById("medicineName").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const manufacturer = document.getElementById("manufacturerSelect").value;
    const priority = document.getElementById("priority").value;
    const notes = document.getElementById("requestNotes").value;
    
    // Generate batch ID
    const nextBatchNum = dummyState.traceability.length + 1;
    const batchId = `BATCH-${String(nextBatchNum).padStart(3, "0")}`;
    
    // Create timestamp
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const requestTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    
    // Create new request
    const newRequest = {
      id: Date.now(),
      batchId: batchId,
      medicineName: medicineName,
      quantity: quantity,
      manufacturer: manufacturer,
      priority: priority,
      notes: notes,
      requestTime: requestTime,
      status: "Requested",
      packagingTime: null,
      deliveryTime: null
    };
    
    // Add to medicine requests
    dummyState.medicineRequests.unshift(newRequest);
    
    // Create new batch entry
    const newBatch = {
      batchId: batchId,
      manufacturer: manufacturer,
      status: "At Manufacturer",
      location: "Manufacturing Facility",
      timestamp: requestTime,
      temperature: null,
      humidity: null,
      requestTime: requestTime,
      packagingTime: null,
      deliveryTime: null,
      medicineName: medicineName,
      quantity: quantity
    };
    
    dummyState.traceability.unshift(newBatch);
    
    // Reset form
    form.reset();
    
    // Show success message
    alert(`Request created successfully!\nBatch ID: ${batchId}\nStatus: Requested`);
    
    // Update displays
    renderRecentRequests();
    renderTraceability();
    renderKpis();
    
    // Switch to traceability to see new batch
    showSection("traceability");
    document.querySelector("#navLinks a[data-section='traceability']").click();
  });
}

// Render recent requests
function renderRecentRequests() {
  const tbody = document.getElementById("recentRequestsTable");
  if (!tbody) return;
  
  const recent = dummyState.medicineRequests.slice(0, 10);
  
  if (recent.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="text-center text-secondary py-3">No requests yet</td></tr>';
    return;
  }
  
  tbody.innerHTML = recent.map(r => {
    const statusBadge = r.status === "Requested" ? "warning" : r.status === "Packaged" ? "info" : r.status === "Delivered" ? "success" : "secondary";
    return `<tr>
      <td><strong>${r.medicineName}</strong><br><small class="text-muted">${r.batchId}</small></td>
      <td><span class="badge bg-${statusBadge}">${r.status}</span></td>
      <td><small class="text-secondary">${r.requestTime}</small></td>
    </tr>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", init);


