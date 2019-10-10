/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import styled from 'styled-components/native';
import { Text } from 'lib/styles';

export const FlagImage = styled.Image({
  width: '100%',
  height: 40,
});

export const Wrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
});

export const FlagWrapper = styled.View({
  flex: 0.2,
  paddingRight: 8,
});

export const StatementText = styled(Text)(({ theme: { fontSizeMini } }) => ({
  flex: 0.8,
  fontSize: fontSizeMini,
}));
