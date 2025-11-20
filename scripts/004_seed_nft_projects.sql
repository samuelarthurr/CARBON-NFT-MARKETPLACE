-- Seed NFT projects
insert into public.nft_projects (
  name, 
  description, 
  project_type, 
  region, 
  verification_status, 
  verifier, 
  price_cents, 
  offset_amount_kg, 
  total_supply, 
  available_supply, 
  image_url, 
  rarity,
  impact_metrics,
  location_coords
) values
('Borneo Rainforest Restoration', 'Help restore the ancient rainforests of Borneo by planting native tree species that support orangutan habitats.', 'reforestation', 'malaysia', 'verified', 'Verra', 1999, 50, 1000, 1000, '/tropical-rainforest-trees-planting.jpg', 'common', '{"trees_planted": 25, "species": ["Dipterocarpus", "Shorea"], "wildlife_protected": ["Orangutan", "Pygmy Elephant"]}', '{"lat": 5.9788, "lng": 116.0753}'),
('Sabah Mangrove Conservation', 'Protect and restore mangrove forests in Sabah that act as carbon sinks and protect coastal communities.', 'mangrove', 'malaysia', 'verified', 'Gold Standard', 2499, 75, 800, 800, '/mangrove-forest-coastal-restoration.jpg', 'rare', '{"mangroves_planted": 50, "coastal_protection_km": 2, "marine_species_protected": 30}', '{"lat": 5.4164, "lng": 118.0070}'),
('Penang Solar Farm Initiative', 'Support the development of solar energy infrastructure in Penang, reducing reliance on fossil fuels.', 'solar', 'malaysia', 'verified', 'Bursa Carbon Exchange', 3999, 150, 500, 500, '/solar-panels-renewable-energy-farm.jpg', 'epic', '{"kwh_generated_annually": 50000, "households_powered": 25, "coal_replaced_tonnes": 100}', '{"lat": 5.4141, "lng": 100.3288}'),
('Sarawak Wind Power Project', 'Fund wind turbines in Sarawak to generate clean, renewable energy for local communities.', 'wind', 'malaysia', 'verified', 'Verra', 4999, 200, 300, 300, '/wind-turbines-renewable-energy.jpg', 'legendary', '{"mwh_generated_annually": 5000, "co2_avoided_tonnes": 2000, "turbines": 10}', '{"lat": 1.5533, "lng": 110.3592}'),
('Indonesian Ocean Cleanup', 'Support ocean cleanup initiatives in Indonesian waters, removing plastic and restoring marine ecosystems.', 'ocean', 'indonesia', 'verified', 'Gold Standard', 2999, 100, 600, 600, '/placeholder.svg?height=400&width=600', 'rare', '{"plastic_removed_kg": 5000, "coral_reefs_protected_hectares": 10, "marine_life_saved": 1000}', '{"lat": -0.7893, "lng": 113.9213}'),
('Thailand Palm Waste Bioenergy', 'Convert palm oil waste into renewable bioenergy, reducing methane emissions in Thailand.', 'bioenergy', 'thailand', 'verified', 'Bursa Carbon Exchange', 1799, 40, 1200, 1200, '/placeholder.svg?height=400&width=600', 'common', '{"waste_converted_tonnes": 1000, "methane_avoided_tonnes": 50, "energy_mwh": 2000}', '{"lat": 13.7563, "lng": 100.5018}'),
('Vietnam Reforestation Program', 'Plant native trees in Vietnam to restore degraded forest land and support local wildlife.', 'reforestation', 'vietnam', 'verified', 'Verra', 1899, 45, 1000, 1000, '/placeholder.svg?height=400&width=600', 'common', '{"trees_planted": 30, "hectares_restored": 5, "jobs_created": 50}', '{"lat": 14.0583, "lng": 108.2772}'),
('Singapore Green Building Initiative', 'Offset carbon by supporting green building retrofits in Singapore with solar panels and energy efficiency upgrades.', 'solar', 'singapore', 'verified', 'Gold Standard', 3499, 120, 400, 400, '/placeholder.svg?height=400&width=600', 'epic', '{"buildings_retrofitted": 5, "energy_saved_kwh": 100000, "co2_reduced_tonnes": 50}', '{"lat": 1.3521, "lng": 103.8198}');
