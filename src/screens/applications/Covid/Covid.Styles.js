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
import { Heading as CommonHeading, Text } from 'lib/styles';

export const Heading = styled(CommonHeading)({
  margin: 10,
});

export const Line = styled(Text)({
  textAlign: 'center',
  margin: 5,
});

export const Wrapper = styled.View({
  padding: 16,
  alignItems: 'center',
});

export const Separator = styled.View({
  width: '100%',
  height: 0,
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginVertical: 10,
});
