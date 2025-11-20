-- Seed achievements
insert into public.achievements (name, description, icon, category, requirement, reward_points) values
('First Step', 'Purchase your first Carbon NFT', 'Leaf', 'offset', '{"type": "total_nfts", "value": 1}', 10),
('Carbon Novice', 'Offset 100kg of CO₂', 'Sprout', 'offset', '{"type": "total_offset", "value": 100}', 25),
('Climate Champion', 'Offset 1,000kg of CO₂', 'TreeDeciduous', 'offset', '{"type": "total_offset", "value": 1000}', 100),
('Carbon Hero', 'Offset 10,000kg of CO₂', 'Trees', 'offset', '{"type": "total_offset", "value": 10000}', 500),
('Collector', 'Own 10 different NFTs', 'Package', 'collection', '{"type": "total_nfts", "value": 10}', 50),
('Rare Hunter', 'Own a legendary NFT', 'Gem', 'collection', '{"type": "rarity", "value": "legendary"}', 100),
('Week Warrior', 'Maintain a 7-day streak', 'Flame', 'streak', '{"type": "streak", "value": 7}', 30),
('Month Master', 'Maintain a 30-day streak', 'Award', 'streak', '{"type": "streak", "value": 30}', 200),
('Social Butterfly', 'Share 5 certificates on social media', 'Share2', 'social', '{"type": "shares", "value": 5}', 20);
